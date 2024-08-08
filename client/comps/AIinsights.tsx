'use client'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";

interface ProductCardProps {
    images: string[];
    name: string;
    store: string;
    likeness: string;
    price: number[];
    url: string;
    catid: number;
}

export default function AIinsights() {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const currProductUrl = (localStorage.getItem('currProduct') || "").slice(0, -3);
                const formdata = new FormData();
                const requestOptions={
                    method: 'POST',
                    body: formdata,
                };
                
                

                const storedImageData = localStorage.getItem('imageData');
                const products: ProductCardProps[] = storedImageData ? JSON.parse(storedImageData)?.products || [] : [];
                
                // const productName = findProductByName(currProductUrl, products);
                const productName = products[0].name.slice(0, 15);
                console.log("Product name:", productName);

                const res = await fetch(`http://localhost:8000/api/trends/${productName}`, requestOptions);
                const data = await res.text();
                console.log(data);

                const prompt = `I have some data regarding searches for a product over a period of time. Could you please analyze this data and provide insights into the trend? the data is given below :${data}`;
                const temp = await getFromGemini(prompt);
                setText(temp);

                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    async function getFromGemini(prompt: string) {
        const GEMINI_KEY = process.env.GEMINI_KEY || "AIzaSyBbgqbWA7c3BekpceqfiMoFXbcregK2LKE";
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        return text;
    }

    function findProductByName(productUrl: string, products: ProductCardProps[]) {
        for (const product of products) {
            // Decode the URL before comparison
            const decodedUrl = decodeURIComponent(product.url);
            console.log(productUrl);
            console.log(decodedUrl);
            if (decodedUrl === productUrl) {
                return product.name;
            }
        }
        return null; // Return null if product name not found
    }

    return (
        <textarea
            placeholder="Enter your text here"
            className="w-full h-96 p-4 border-2 border-gray-300 rounded-lg shadow-lg"
            value={text}
            readOnly
        />
    );
}
