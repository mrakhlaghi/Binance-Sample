import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({
  options,
  filterField,
}: {
  options: any;
  filterField: any;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
    //! why should i set searchParams.set() and after that setSearchParams(searchParams) it ???
    //! ----->  if you set the value directly it will replace to all of the searchParams instead of add to them.😎😎
  }

  return (
    <Select onChange={handleChange} value={filterValue} options={options} />
  );
}
export default FilterDropDown;
