import Link from "next/link";

export default function TabButtons(props) {
  if (props.actived !== "true") {
    return (
      <div className=" text-center m-auto p-1 md:p-3 text-sm md:text-2xl border-primary-40 border-2 rounded-2xl text-primary-50 font-medium hover:bg-primary-40 hover:text-white active:bg-primary-90 active:text-white md:w-5/12 ">
        <Link href={props.link}>{props.children}</Link>
      </div>
    );
  }
  return (
    <div className="text-center m-auto md:p-3 p-1 text-sm md:text-2xl border-primary-40 border-2 rounded-2xl text-white bg-primary-40 aria-disabled md:w-5/12">
      <Link href={props.link}>{props.children}</Link>
    </div>
  );
}
