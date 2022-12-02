import React, {ChangeEventHandler, FormEventHandler, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {AuthStatus} from "../../../consts";
import {selectAuthStatus} from "../../../store/reducers/userReducer";
import {selectReviewLoading, sendReview} from "../../../store/reducers/dataReducer";

type CommentsFormProps = {
  roomId?: string
}

function CommentsForm({roomId}:CommentsFormProps): JSX.Element {


  const dispatch = useAppDispatch()
  const isReviewLoading = useAppSelector(selectReviewLoading)
  const authStatus = useAppSelector(selectAuthStatus)

  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  const onTextChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value)
  }

  if (authStatus !== AuthStatus.Auth) return <></>
  const isDisabled = text.length < 50 || rating == 0 || isReviewLoading

  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    dispatch(sendReview(
      {
        id: roomId,
        body: {
          comment: text,
          rating: rating
        }
      }
    ))
    setText('');
    setRating(0)
  }

  const onRatingChange = (id: number) => {
    setRating(id)
  }
  const ratingArray = [
    'perfect',
    'good',
    'not bad',
    'badly',
    'terribly'
  ]
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          ratingArray.map((item, index) => {
            return <React.Fragment key={nanoid()}>
              <input className="form__rating-input visually-hidden" name="rating" value="{index+1}"
                     id={`${5 - index}-stars`}
                     type="radio" onChange={() => onRatingChange(5 - index)} checked={5 - index == rating}/>
              <label htmlFor={`${5 - index}-stars`} className="reviews__rating-label form__rating-label" title={item}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          })
        }

      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
                placeholder="Tell how was your stay, what you like and what can be improved"
                value={text}
                onChange={onTextChange}

      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  )
}

export default CommentsForm
