interface HeaderProps {
  children: string
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <div>Header
      {props.children}
      </div>
    </div>
  )
}
