import Link from "next/link";

export default function MoreButton(props){
    return<Link className="flex justify-center content-center py-1 text-2xl border-primary-40 border-2 rounded-full w-48 h-12 text-primary-50  font-medium hover:bg-primary-40 hover:text-white" href={props.link}>Xem Thêm &gt;</Link>
    
}