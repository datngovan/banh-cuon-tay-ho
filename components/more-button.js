import Link from "next/link";

export default function MoreButton(props){
    return<Link className="flex justify-center text-2xl border-primary-50 border-2 rounded-full w-48 h-12 text-primary-50  font-medium hover:bg-primary-50 hover:text-white" href={props.link}>Xem Thêm &gt;</Link>
    
}