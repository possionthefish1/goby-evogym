import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  currentPage: string;
  setCurrentPage: (value: string) => void;
};

function Links({ page, currentPage, setCurrentPage }: Props) {
  const lowercasedPage = page.toLowerCase().replace(/ /g, '');
  return (
    <AnchorLink
      className={`${
        currentPage === lowercasedPage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowercasedPage}`}
      onClick={() => setCurrentPage(lowercasedPage)}
    >
      {page}
    </AnchorLink>
  );
}

export { Links };
