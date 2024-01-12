import Link from "next/link";

export default function TabButtons(props) {
    if(props.actived !== "true"){
      return (
        <Link className="m-auto p-3 text-2xl border-primary-50 border-2 rounded-full text-primary-50 font-medium hover:bg-primary-50 hover:text-white active:bg-primary-90 active:text-white" href={props.link}>{props.children}</Link>
      )
    }
    return (
      <Link className="m-auto p-3 text-2xl border-primary-50 border-2 rounded-full text-white bg-primary-50  aria-disabled" href={props.link}>{props.children}</Link>
    )
  }
  