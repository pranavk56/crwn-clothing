import React from 'react'
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categoryItemList }) => {
  return (
    <div className="directory-container">
      {
        categoryItemList.map((category) => {
          return <CategoryItem key={category.id} category={category} />
        })
      }
    </div>
  )
}

export default Directory;