
import connectMongoDB from "@/lib/mongodb";
import Blogs from "@/models/blogs";
import { NextResponse } from "next/server";


export async function POST(request){
    const {title,content} = await request.json();
    await connectMongoDB();
    await Blogs.create({title,content});
    return NextResponse.json({message:"Blogs Created"},{status:201})
}

export async function GET() {
    await connectMongoDB();
    const blogs = await Blogs.find();
    return NextResponse.json({ blogs });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Blogs.findByIdAndDelete(id);
    return NextResponse.json({ message: "Blogs deleted" }, { status: 200 });
}