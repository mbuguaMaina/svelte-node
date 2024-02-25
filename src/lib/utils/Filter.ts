const FilterFunction = (data: any[] = [], type: string, str: string) => {
  if (str === "all") {
    return data;
  }
  return data.filter((item) => item.fields[type] === str);
};

export default FilterFunction;
