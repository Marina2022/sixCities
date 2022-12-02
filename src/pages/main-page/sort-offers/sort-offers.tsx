import classNames from "classnames";
import cn from "classnames";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {nanoid} from "@reduxjs/toolkit";
import {useState} from "react";
import {selectCurrentSort, setSortVariant} from "../../../store/reducers/dataReducer";

function SortOffers(): JSX.Element {
  const dispatch = useAppDispatch()
  const onSortClick = (variant: string) => {
    dispatch(setSortVariant(variant))
    setOpened((opened)=>!opened)
  }

  const onVariantClick = () => setOpened((opened)=>!opened)

  const currentSort = useAppSelector(selectCurrentSort)
  const sortVariants = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first']

  const [opened, setOpened] = useState(false)
  const classSuffix = opened ? '--opened' : ''
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={onVariantClick}>
                  {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
      <ul className={`places__options places__options--custom places__options${classSuffix}`}>
        {
          sortVariants.map(variant => {
            return <li
              key={nanoid()}
              className={cn("places__option", variant === currentSort ? "places__option--active" : '')}
              tabIndex={0}
              onClick={() => onSortClick(variant)}
            >{variant}</li>
          })
        }
      </ul>
    </form>
  )
}

export default SortOffers
