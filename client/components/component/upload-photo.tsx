// UploadPhoto component
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent } from "react";

export default function UploadPhoto() {
  async function handleImage(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      const image = files[0];
      const formData = new FormData();
      formData.append('image', image);
      await getImages(formData);
    }
  }

  async function getImages(formData: FormData) {
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    const response = await fetch('https://anemo.productsearch.app/search?platform=web&searchInStores=&model=general&offset=0&limit=50&ekey=U2FsdGVkX1%2BXgJs9r3S8qfX%2B1jpaaA%2B922EuaYH2W1bYQooM4xoa7IvYrnWq0lHhw9GTAnzqHmMI1K0lcw7TfImf2UCZhiYJDaIN9Oee56c%3D', requestOptions);
    const data = await response.json();

    if (typeof window !== 'undefined') {
      localStorage.setItem('imageData', JSON.stringify(data));
    }

    return data;
  }
  
  async function handleSubmit() {
    const inputElement = document.getElementById('image') as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const formData = new FormData();
      formData.append('image', inputElement.files[0]);
      await getImages(formData);
    }
    window.location.reload();
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div>Upload Image</div>
        <div>Submit an image file.</div>
      </CardHeader>
      <CardContent className="flex items-start gap-4 pt-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" onChange={handleImage} />
        </div>
        <Button type="button" onClick={handleSubmit}>Submit</Button>
      </CardContent>
    </Card>
  )
}
