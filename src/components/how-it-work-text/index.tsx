"use client";


export default function HowItWorksText() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto flex flex-col gap-[6rem] px-6">
                <h1 className="text-5xl font-extrabold  text-[#C81E8A]">Empowering Creativity, Expanding Opportunity</h1>
                <div className="flex flex-col  ">
                    <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
                        <b>Whiplano</b> is revolutionizing creative ownership by transforming intellectual property rights into dynamic, tradeable assets. We provide a decentralized system where creators, artisans, and supporters collaborate freely—without corporate gatekeepers.

                        <br /><br />

                        At the heart of our system are <b>Tradable Seed Rights (TRS)</b>—a new way to distribute, expand, and commercialize creative works. TRS enable creators to divide and sell expansion and production rights like NFTs, but without the volatility of traditional crypto markets. Our unique technology bridges blockchain security with fiat accessibility, ensuring anyone can participate, no matter their technical background.
                    </p>
                </div>

                <hr className=" border-t-2 border-gray-300 my-4" />

                <h1 className="text-5xl font-extrabold  text-[#C81E8A]">The Whiplano Process
                </h1>
                {/*1. Creators Publish & Set Rights*/}
                <div className="flex flex-col ">
                    <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">1. Creators Publish & Set Rights</h2>
                    <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
                        <ul className="list-disc list-inside pl-[3rem]">
                            <li>A creator uploads their book, game, artwork, or other creative work onto Whiplano.</li>
                            <li>They issue a limited collection of <b>TRS</b>, defining how holders can expand, adapt, or produce derivatives.</li>
                            <li>TRS are sold through our marketplace, providing upfront funding while keeping the creator in control.</li>
                        </ul>
                    </p>
                </div>

                {/*2. Holders Activate Artisan Rights*/}
                <div className="flex flex-col ">
                    <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">2. Holders Activate Artisan Rights</h2>
                    <p className="text-lg leading-relaxed text-gray-700 md:text-justify">

                        <ul className="list-disc list-inside pl-[3rem]">
                            <li>TRS buyers can <b>hold, trade, or activate</b> their rights to create new works based on the original.</li>
                            <li><b>Artisans</b>—such as publishers, filmmakers, game developers, and craftspeople—can legally produce and monetize their adaptations.</li>
                            <li>Creators retain credit and <b>earn royalties</b> from derivative works</li>
                        </ul>
                    </p>
                </div>

                {/*3. Trading & Growth*/}
                <div className="flex flex-col ">
                    <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">3. Trading & Growth</h2>
                    <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
                        <ul className="list-disc list-inside pl-[3rem]">
                            <li><b>TRS are tradeable</b> like collectible licenses—holders can sell them if demand grows.</li>
                            <li><b>Derivative works add value</b> to the ecosystem, increasing visibility and revenue for both original and new creators.</li>
                            <li>The <b>Whiplano marketplace</b> fosters collaborative expansion rather than restrictive control.</li>
                        </ul>
                    </p>
                </div>

                <hr className=" border-t-2 border-gray-300 my-4" />

                <h1 className="text-5xl font-extrabold  text-[#C81E8A]">Seamless Transactions: Fiat & Blockchain Together</h1>

                <div className="flex flex-col ">
                    <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
                        <ul className="list-disc list-inside pl-[3rem]">
                            <li><b>Blockchain Security</b>: Every TRS transaction is immutable and transparent, ensuring clear ownership records.</li>
                            <li><b>Fiat Accessibility</b>: Users can buy and sell TRS using traditional payment methods like <b>PayPal and credit cards</b>—no crypto wallet required.</li>
                            <li><b>Automated Royalty Flow</b>: When a derivative work succeeds, its revenue automatically distributes to the original creator and TRS holders, ensuring fair compensation.</li>

                        </ul>

                    </p>
                </div>

                <hr className=" border-t-2 border-gray-300 my-4" />

                <h1 className="text-5xl font-extrabold  text-[#C81E8A]">Why It Matters</h1>

                <div className="flex flex-col ">
                    <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
                        Whiplano eliminates the barriers of traditional publishing, licensing, and intellectual property management. Instead of corporations controlling distribution, we put power directly into the hands of creators and communities.

                        <br /><br />

                        <ul className="list-disc list-inside pl-[3rem]">
                            <li><b>Creators</b> get paid upfront and retain long-term credit.</li>
                            <li><b>Artisans</b> can legally build on great ideas without legal roadblocks.</li>
                            <li><b>Supporters</b> become true stakeholders, fueling the growth of projects they believe in.</li>
                        </ul>

                        <br /><br />

                        <h1 className="text-xl font-extrabol ">
                            <strong>Whiplano isn’t just a marketplace—it’s an entirely new creative economy where imagination thrives, ownership is fluid, and opportunities are limitless.</strong>
                        </h1>


                    </p>
                </div>

                <hr className=" border-t-2 border-gray-300 mt-4" />

                <h1 className="text-5xl font-extrabold  text-[#C81E8A] mb-10">Join the Movement </h1>

            </div>
        </section>
    );
}
