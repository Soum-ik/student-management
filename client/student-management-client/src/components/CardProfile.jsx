import Image from "next/image";
import React from "react";

function CardProfile({ data }) {
    return <div>

        <section class="mb-2 border   p-4 rounded-lg max-w-full bg-neutral-100">
            <div class="mx-auto">
                <div class="card md:flex max-w-lg">
                    <div class="w-20 h-20 mx-auto mb-6">
                        <Image alt="image" height={50} width={50} class="object-cover rounded-full" src="https://tailwindflex.com/public/images/user.png" />
                    </div>
                    <div class="flex-grow text-center md:text-left">
                        <p class="font-semibold text-xs gap-2">{data.year}    {data.roll}</p>
                        <h3 class="text-xl heading">{data.name}</h3>
                        <p class="mt-2 mb-3">{data.email}</p>
                        <div className=" space-x-1 space-y-1">
                            <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">{data.roll}</span>
                            <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">{data.department}</span>
                            <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">{data?.timestamp.split(' ')[0]}</span>
                            {/* <span class="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">{data?.timestamp.split(' ')[1]}</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>;
}

export default CardProfile;
