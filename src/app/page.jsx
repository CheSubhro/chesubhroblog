import Link from "next/link";

const getBlogs = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/blogs", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch blogs");
		}

		return await res.json();

	} catch (error) {
		console.error(error);

		return { blogs: [] };
	}
};

const formatDate = (dateString) => {
	const options = { day: '2-digit', month: 'short', year: 'numeric' };
	const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
	return formattedDate;
  };

const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};  

export default async function Home() {

	const {blogs} = await getBlogs();
	const maxLength = 200;
    return (
		<>
			<section class="text-gray-600 body-font">
				<div className="container px-5 py-4 pr-14 mx-auto">
					<div className="space-y-2 pb-8 pt-6 md:space-y-5">
						<h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-950 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">Latest</h1>	

						<p>A blog created with Next.js and Tailwind.css</p>
					</div>
					<hr />
					{blogs.map((b) => (
						<div class="container px-5 py-4 mx-auto" key={b._id}>
							
							<div class="flex flex-wrap -mx-4 -mb-10 text-center">
							<div class="sm:w-1/3 mb-10 px-11">
								<p>{formatDate(b.createdAt)}</p>
							</div>
							<div class="sm:w-2/3 mb-10 px-4">
								<div class="rounded-lg h-64 overflow-hidden">
								<Link href={`/blog/${b._id}`}  className="mt-2">{b.title}
								</Link>
									<p className="leading-relaxed text-base">
                                            {truncateText(b.content, maxLength)}
                                    </p>
								<div class="text-base font-medium leading-6">
									<a
										className="text-red-500 hover:text-red-600 dark:hover:text-red-400"
										aria-label={`Read more: "${b.title}"`}
										href={`/blog/${encodeURIComponent(b.title)}`}
									>
										Read more →
									</a>
								</div>
								</div>
							</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
    );
}
