import './PageHeader.css';

function PageHeader({ title }) {
  return (
    <div className="page-header">
      <h2>{title}</h2>
    </div>
  )
}

export default PageHeader;