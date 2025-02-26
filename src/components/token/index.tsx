"use client";
import { Button } from "@/components/ui/button"; // ShadCN Button Component
import Image from "next/image";

export default function TokenText() {
    return (
        <>
            {/* <Header /> */}

            <section className="pt-12 bg-gradient-to-r from-[#DB2777] to-[#FE658F] text-white ">
                <div className="pb-[6rem]">
                    <div className=" container mx-auto flex flex-col gap-[6rem] px-6 ">

                        <div className="flex flex-col">
                            <p className="text-lg leading-relaxed  md:text-justify">
                                Welcome to the future of intellectual property trading. <b>WHIPLANO (TRS)</b> is not just another token—it’s a revolution in the way digital and creative assets are owned, divided, and traded.

                                <br /><br />

                                We hold just under <b>3%</b> of the supply, with <b>2%</b> securely locked and <b>1%</b> allocated to fund our dedicated team. Our focus is on building real technology, not hype.
                            </p>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />
                    </div>

                </div>

                <div className=" text-white pb-[6rem]">
                    <div className="container mx-auto flex flex-col gap-[6rem] px-6 bg-">

                        {/*Empowering Artists & Innovators*/}
                        <div className="flex flex-col ">
                            <h2 className="text-3xl font-extrabold mb-6 ">Empowering Artists & Innovators</h2>
                            <p className="text-lg leading-relaxed  md:text-justify">
                                <b>WHIPLANO</b> enables seamless division of art and tech expansion rights, putting the power back into the hands of creators and investors. Our system ensures fair and incentivized community participation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" text-white pb-[6rem]">
                    <div className="container mx-auto flex flex-col gap-[6rem] px-6 bg-">

                        {/*The Era of Tradable Rights Seeds*/}
                        <div className="flex flex-col ">
                            <h2 className="text-3xl font-extrabold mb-6 ">The Era of Tradable Rights Seeds</h2>
                            <p className="text-lg leading-relaxed  md:text-justify">
                                We are pioneering a new standard where <b>intellectual property</b> can be securely traded and monetized using <b>blockchain</b>. Our seamless fiat integration ensures <b>accessibility</b> and <b>security</b> for all.

                            </p>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />
                    </div>
                </div>
                <div className=" text-white pb-[6rem]">
                    <div className="container mx-auto flex flex-col gap-[6rem] px-6 bg-">

                        {/*Join the Movement*/}
                        <div className="flex flex-col ">
                            <h2 className="text-3xl font-extrabold mb-6 ">Join the Movement</h2>
                            <p className="text-lg leading-relaxed  md:text-justify">
                                Be part of a groundbreaking shift in digital ownership. Trade, profit, and innovate with <b>WHIPLANO</b>.
                                <br /><br />
                                CA - Gfsd88H7MkDyS1a2dmUDkj8gRhiDpBYHFt8yXRjjpump
                            </p>

                            <div className="mt-7">
                                <Button
                                    className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-300 ring-2 ring-transparent hover:ring-[#DB2777]/50 flex items-center gap-2 "
                                    onClick={() => {
                                        const url = "https://pump.fun/coin/Gfsd88H7MkDyS1a2dmUDkj8gRhiDpBYHFt8yXRjjpump";
                                        window.open(url, "_blank", "noopener,noreferrer");
                                    }}
                                >
                                    Pump
                                    <Image
                                                  src="/coin.svg"
                                                  alt="Telegram"
                                                  width={24}
                                                  height={24}
                                                  className="cursor-pointer"
                                                />
                                </Button>
                            </div>
                            <p className="text-md leading-relaxed mt-[4rem] md:text-justify">
                                <strong>*This is NOT a Meme Coin (SOL)$WHIPLANO (TRS)*</strong>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    );
}