import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";

interface ProductCardProps {
  Plink: string;
  name: string;
  seller: string;
  likeness: number;
  price: number;
  Rlink: string;
}

export default function Productcard(props: ProductCardProps) {
  const { Plink, name, seller, likeness, price, Rlink } = props;

  return (
    <Card className="h-[483px] w-[350px] overflow-hidden rounded-lg shadow-lg">
      <img
        alt="Product image"
        className="h-[233px] w-full object-cover"
        height="233"
        src={Plink}
        style={{
          aspectRatio: "350/233",
          objectFit: "cover",
        }}
        width="350"
      />
      <CardContent className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <p className="text-sm text-gray-500">{seller}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <HeartIcon />
            <span className="ml-1 text-sm font-medium">{likeness}</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-lg font-semibold">₹{price * 82.89}</span>
          </div>
        </div>
        <div className="mt-2 flex cursor-pointer flex-col items-start">
          <a
            target="_blank"
            className="rounded bg-black p-2 text-sm font-semibold text-white"
            href={Rlink}
          >
            Visit Product
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
