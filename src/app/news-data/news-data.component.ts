import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: ['./news-data.component.css']
})
export class NewsDataComponent implements OnInit {

  articles = [
    {
    id: 1,
    name: "Electrek",
    author: "Michelle Lewis",
    title: "EGEB: Here’s how much it costs to charge your EV with rooftop solar",
    description: "In today’s Electrek Green Energy Brief (EGEB):\n<ul>\n<li>Charging an electric vehicle with rooftop solar in the US is cheaper than using grid power or public chargers.</li>\n<li>El Salvador commissions its very first wind farm.</li>\n<li>UnderstandSolar is a fre…",
    url: "https://electrek.co/2021/07/15/egeb-heres-how-much-it-costs-to-charge-your-ev-with-rooftop-solar/",
    urlToImage: "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2019/10/Electrify-America-home-charger-e1570024931138.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2021-07-15T14:44:46Z",
    content: "In todays Electrek Green Energy Brief (EGEB):\r\n<ul><li>Charging an electric vehicle with rooftop solar in the US is cheaper than using grid power or public chargers.</li><li>El Salvador commissions i… [+3418 chars]"
    },
    {
    id: 2,
    name: "Phandroid",
    author: "Nick Gray",
    title: "Mango Power Union Vs EcoFlow DELTA Pro: Which is the Year’s Best Power Station?",
    description: "Over the past year, portable power stations have become a hot topic of discussion. A ton of new products have come out recently from established brands like Jackery, EcoFlow, and Bluetti. A few have gotten their start via crowdfunding, like the Bluetti EP500 …",
    url: "https://phandroid.com/2021/07/15/mango-power-union-vs-ecoflow-delta-pro-which-is-the-years-best-power-station/",
    urlToImage: "https://phandroid.com/wp-content/uploads/2021/07/mago-power-union-versus-ecoflow-delta-pro-640x360.jpg",
    publishedAt: "2021-07-15T14:35:21Z",
    content: "Over the past year,portable power stations have become a hot topic of discussion. A ton of new products have come out recently from established brands like Jackery, EcoFlow, and Bluetti. A few have g… [+12800 chars]"
    },
    {
    id: 3,
    name: "Business Insider",
    author: "Matthew Fox",
    title: "Tesla will likely launch a flying car business by 2050 that could be worth $1,000 per share, according to Morgan Stanley",
    description: "\"The chance that Tesla does not ultimately offer products and services to the [flying car] market is remote,\" Morgan Stanley said.",
    url: "https://markets.businessinsider.com/news/stocks/tesla-flying-car-business-2050-stock-price-morgan-stanley-tsla-2021-7",
    urlToImage: "https://images2.markets.businessinsider.com/60f03862bb790e0018207b3e?format=jpeg",
    publishedAt: "2021-07-15T14:30:54Z",
    content: "Elon Musk.\r\nBritta Pedersen-Pool/Getty Images\r\n<ul><li>Tesla's launch of a flying car is a matter of when, not if, according to a note from Morgan Stanley.</li><li>Morgan Stanley thinks a flying car … [+1992 chars]"
    },
    {
    id: 4,
    name: "Seeking Alpha",
    author: "Clark Schultz",
    title: "Aurora confirms SPAC deal as it looks to disrupt electric vehicle technology market",
    description: "Aurora confirms SPAC deal as it looks to disrupt electric vehicle technology market",
    url: "https://seekingalpha.com/news/3715578-aurora-confirms-spac-deal-as-it-looks-to-disrupt-electric-vehicle-technology-market",
    urlToImage: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1215981712/large_image_1215981712.jpg",
    publishedAt: "2021-07-15T14:27:26Z",
    content: "AerialPerspective Works/E+ via Getty Images\r\n\n<ul> <li>Self-driving technology company Aurora enters a SPAC&nbsp;deal to merge with Reinvent Technology Partners Y (RTPY +2.0%\r\n).</li>\n<li>Upon closin… [+1555 chars]"
    }
  ];


detailData: any;
constructor() { }

ngOnInit(): void {
}


GoToDetails(details: any) {
  this.detailData = details;
  console.log('Details =>',details);
}

}
