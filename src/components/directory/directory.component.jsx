import DirectoryItem from "../directory-item/directory-item.component"
import { DirectoryContainer } from  './directory.styles.jsx'
import { selectDirectory, selectDirectoryCategories } from "../../store/categories/category.selector.js"
import { useSelector } from 'react-redux'

const Directory = () => {
  const categories = useSelector(selectDirectory)
  return (
    <DirectoryContainer>
      {categories?.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </DirectoryContainer>
  )
}

export default Directory