import './Tag.css';

interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export function Tag({ children, onClick, active = false }: TagProps) {
  const className = `tag ${onClick ? 'tag-clickable' : ''} ${active ? 'tag-active' : ''}`;

  if (onClick) {
    return (
      <button className={className} onClick={onClick} type="button">
        {children}
      </button>
    );
  }

  return <span className={className}>{children}</span>;
}
