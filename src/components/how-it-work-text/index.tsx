"use client";



export default function HowItWorksText() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col gap-[6rem] px-6">
        <h1 className="text-5xl font-extrabold  text-[#C81E8A]">Section 1: User Guide – Engaging with Whiplano</h1>
        {/*1. Creating and Holding TRS*/}
        <div className="flex flex-col  ">
            <h2 className="text-3xl font-extrabold  mb-6 text-[#C81E8A]">1. Creating and Holding TRS</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            Users can engage with intellectual property on Whiplano by 
            acquiring <strong>Tradable Right Seeds(TRS)</strong>. They are digital assets  
            that function like shares in creative works, which allows holders to : 
            
            <br /><br />

            <ul className="list-disc list-inside pl-[3rem]">
                <li><strong>Invest in Creative Works</strong>, as a potential financial asset, anticipating and increase in value as the project gains traction and becomes popular.</li>
                <li><strong>Trade TRS</strong> on the marketplace with other users similar to how Stocks are traded on Stock Exchanges</li>
                <li><strong>Activate Artisan Privileges</strong>, By holding the required amount of TRS, unlocking the ability to create and monetize off of derivative works.</li>
            </ul>

            </p>
        </div>
        
        {/*2. Creating Derivative Works and Derivative TRS*/}
        <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">2. Creating Derivative Works and Derivative TRS</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            If users hold enough TRS (the required number is dynamic and depends 
            on the type of contract signed by the creator on uploading their work 
            as a TRS), they can activate <strong>Artisan Privileges</strong> and create derivatives 
            of the original creative work. These derivative works can be uploaded 
            with their own TRS which would be linked to the original TRS, as a 
            subset. 

            <br /><br />

            When a user activates Artisan Privileges, they accept to give a 
            percentage of the revenue, after a certain mark (For eg, 5% of all 
            profits after the first $10,000.), and also credit the original artist 
            in their work. If they choose to create a derivative TRS, it’ll 
            be considered as a subset of the Original TRS, and all Royalties 
            will flow into the original TRS pool, where it’ll be split among 
            the original artist and all TRS holders(similar to dividends), thus 
            incentivizing users to buy and hold TRS. The same is applicable for 
            all derivative TRS made out of other derivative TRS.

            <br /><br />
            All money received from royalties will first flow into a wallet kept 
            with Whiplano, and users can withdraw from that wallet as they require, 
            to lower unnecessary transaction charges. 

            </p>
        </div>

        {/*3. Whiplano as an Investment and Community Platform*/}
        <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">3. Whiplano as an Investment and Community Platform</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            Beyond supporting individual creators, Whiplano serves as an 
            <strong>indicator of its own success as a company</strong>. TRS activity reflects:
            
            <br /><br />

            <ul className="list-disc list-inside pl-[3rem]">
                <li><strong>The popularity and financial health of creative works</strong></li>
                <li><strong>Opportunities for investors to engage with promising projects</strong></li>
                <li><strong>A way for the community to benefit</strong>, as TRS holders receive a share of royalties akin to dividends</li>
            </ul>

            <br /><br />

            By participating in TRS, users not only support creative endeavors but 
            also have the potential to <strong>profit as the platform and its ecosystem grow</strong>.

            </p>
        </div>

        {/*4. Examples*/}
        <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">4. Examples</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            <ul className="list-disc list-inside pl-[3rem]">
                <li>Galen writes a book, which he then publishes on Whiplano as 100 TRS, for 
                    $1000USD each. The book gains popularity and is doing well.</li>
                <li>Lars, Galen’s friend, believes that the book will do really well, and 
                    also wanting to support Galen, buys 50 TRS from him, which helps Galen 
                    financially as well.</li>
                <li>Nick, Owner of a Merchandise store, wants to profit off of Galen’s book, 
                    and buys 10 TRS, holding 5 as an investment, and activating artisan rights
                     on the remaining 5. With the newly received Artisan privileges Nick creates 
                     a whole plethora of merchandise, ranging from T-Shirts, Pens, Keychains etc.
                <br /> Nick generates a net profit of $150,000 from the merchandise, and according to his Artisan agreement, 10% of profit after the first $100,000 is to be given to the original TRS pool. So 10% of $50,000 ($150,000 - $100,000), i.e $5,000 is credited to the original book’s TRS pool. Of this $5,000 50% goes to the Galen, and the remaining 50% is split among all the holders i.e Lars, Nick and Galen(since he holds the 40 unsold TRS), proportional to the number of TRS held by them.</li>
                
                <br /><br />
                This enabled all parties involved, Galen the original artist, Nick a derivative artist, and Lars an investor to benefit financially.
                <br /><br />

                <li>Seeing the popularity of the book, Philip, owner of a film studio, decides to buy the remaining 40 TRS, activate artisan privileges and make a movie. As before a percentage of the profits goes back to Galen and all the other TRS holders.</li>
                <li>Noticing the payouts given to the TRS pool, Tesco puts a buy order of 50TRS for $1,500USD each, which Lars accepts. Thus Lars benefitted from both the success of the work, and also the increase in value of TRS due to increase in demand.</li>
                
            </ul>
            <br /><br />

            <strong>NOTE: All figures given in this example is purely for demonstrative purposes. They may vary. </strong>

            </p>
        </div>

        <h1 className="text-5xl font-extrabold  text-[#C81E8A]">Section 2: Behind the Scenes – Blockchain and Technical Mechanics</h1>
        

        {/*1. Publication NFTs and Metadata*/}
        <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">1. Publication NFTs and Metadata</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            When a creator publishes a work, it is minted as a <strong>publication NFT</strong> 
            on the blockchain. This NFT contains:

            <br /><br />

            <ul className="list-disc list-inside pl-[3rem]">
                <li>The <strong>metadata URI</strong>, which stores ownership details and licensing terms.</li>
                <li><strong>Initial TRS supply</strong> settings, determining how many TRS can be issued.</li>
                <li><strong>Update mechanisms</strong>, ensuring that TRS transactions modify the metadata to reflect new holders and derivative works.</li>
            </ul>

            </p>
        </div>

        {/*2. TRS Transactions and Market Dynamics*/}
        <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">2. TRS Transactions and Market Dynamics</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            TRS exists as <strong>fungible tokens</strong> tied to the original NFT. 
            Transactions are recorded <strong>on-chain</strong>, ensuring transparency. 
            When a TRS is bought, sold, or transferred:

            <br /><br />

            <ul className="list-disc list-inside pl-[3rem]">
                <li>The metadata of the associated publication NFT <strong>updates to reflect ownership changes</strong>.</li>
                <li>Transactions are stored on the blockchain, ensuring security and verification.</li>
            </ul>

            </p>
        </div>

        {/*3. Buffer Wallet and Withdrawals*/}
        <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">3. Buffer Wallet and Withdrawals</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            Royalties and earnings from TRS transactions accumulate in a  
            <strong> Whiplano-controlled buffer wallet (THIS IS NOT A CRYPTO WALLET).</strong>. 
            Users can:

            <br /><br />

            <ul className="list-disc list-inside pl-[3rem]">
                <li>Track their share of earnings via the blockchain.</li>
                <li>Withdraw their share at any time.</li>
                <li>See real-time analytics of TRS distribution and revenue generation.</li>
            </ul>

            </p>
        </div>

        {/*4. Ensuring Security and Transparency*/}
        <div className="flex flex-col ">
            <h2 className="text-3xl font-extrabold mb-6 text-[#C81E8A]">4. Ensuring Security and Transparency</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            <ul className="list-disc list-inside pl-[3rem]">
                <li>We introduce transparency into Whiplano, since all users can view all transactions and ownership history of each TRS. This also acts as proof against malpractice or technical errors.</li>
                <li>To enable the less technologically inclined users to view the same history without assistance, we will also be building a visual platform, which will act as a blockchain explorer of sort, but much less complicated, and more intuitive with a graphical interface.</li>
            </ul>

            </p>
        </div>

        <hr className="border-t-2 border-gray-300 my-4" />

        {/*Conclusion*/}
        <div className="flex flex-col ">
            <h2 className="text-5xl font-extrabold mb-10 text-[#C81E8A]">Conclusion</h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-justify">
            Whiplano blends <strong>blockchain innovation with community-driven creativity</strong>, 
            making it a <strong>
                platform for investment, artistic collaboration, and
                sustainable growth
            </strong>. Whether you&apos;re a creator, investor, or artisan, 
            Whiplano empowers you to shape the future of decentralized intellectual 
            property.
            
            <br /><br />
            
            <strong>Welcome to Whiplano—where creativity meets opportunity.</strong>

            </p>
        </div>

        </div>
    </section>
  );
}
