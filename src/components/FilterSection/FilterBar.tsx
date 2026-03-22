import { Container } from "../common";
import RegionMenu from "./RegionMenu";
import SearchBar from "./SearchBar";
function FilterBar() {
  return (
    <section className="mt-8 mb-12 md:my-12">
      <Container className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-2">
        <SearchBar />
        <RegionMenu />
      </Container>
    </section>
  );
}

export default FilterBar;
