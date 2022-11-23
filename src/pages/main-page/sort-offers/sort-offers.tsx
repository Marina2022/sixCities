import classNames from "classnames";
import cn from "classnames";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {setSortVariant} from "../../../store/actions";
import {nanoid} from "@reduxjs/toolkit";

function SortOffers(): JSX.Element {
  const dispatch = useAppDispatch()
  const onSortClick = (variant: string)=>{
    dispatch(setSortVariant(variant))
  }
 const currentSort = useAppSelector(state=>state.currentSort)
  const sortVariants = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first']
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          sortVariants.map(variant=>{
            return <li
              key={nanoid()}
              className={cn("places__option", variant === currentSort ? "places__option--active": '')}
              tabIndex={0}
              onClick={()=>onSortClick(variant)}
            >{variant}</li>
          })
        }
      </ul>
    </form>
  )
}

export default SortOffers
