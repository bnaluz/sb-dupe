import Link from "next/link";
import Image from "next/image";

type SaleItemProps = {
  title: string;
  backgroundImg: string;
  URL: string;
  tagLine: string;
};

const SaleItem = ({ title, backgroundImg, URL, tagLine }: SaleItemProps) => {
  return <div>hi</div>;
};

export default SaleItem;
