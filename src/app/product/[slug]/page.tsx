import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
    params:Promise<{slug:string}>
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "products" && slug.current == $slug][0]{
            _id,
            name,
            image,
            description,
            price,
            category,
            discountPercent,
            colors,
        }`,{ slug }
    );
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params; // Get the id from the params
    const product = await getProduct(slug);
    return (
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-28">
                <div className="aspect-square">
                    {product?.image?.asset && (
                        <Image 
                            src={urlFor(product.image.asset).url()}  // Fetch image using `.asset`
                            alt={product?.name}
                            width={500}
                            height={400}
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8 ">
                    <h1 className="text-4xl font-bold">{product?.name}</h1>
                    <p className="font-bold text-3xl ">{product.category}</p>
                    <p className="text-2xl font-sans text-gray-400">${product?.price}</p>
                    <h1 className="text-3xl font-bold">Discount</h1>
                    <p className="line-through text-gray-400 text-2xl">{product.discountPercent}%</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}
