import connectMongoDB from "@/lib/mongodb";
import Blogs from "@/models/blogs";
import { NextResponse } from "next/server";

export async function PUT(request,{ params }){
    const { id } = params;
    const { title,content} = await request.json();
    await connectMongoDB();
    await Blogs.findByIdAndUpdate(id, { title, content });
    return NextResponse.json({ message: "Blog updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const blogs = await Blogs.findOne({ _id: id });
    return NextResponse.json({ blogs }, { status: 200 });
}