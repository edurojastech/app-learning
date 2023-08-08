// eslint-disable-next-line react/prop-types
function LinksButton({ desc, estilos, href }) {
  return (
    <a
      href={href}
      className={`btn btn-sm ${estilos}`}
    >
      {desc}
    </a>
  );
}

export default LinksButton;
