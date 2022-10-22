import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.mpdv.com/media/product_solutions_2021/headers/header-manufacturing-execution-system-mes-hydra-x.jpg"
                        alt="" className="home__image" />
                        <h1 className='center'>بزرگترین مرجع برنامه نویسی به زبان فارسی</h1>

                    <div className="home__row">
                        <Product
                            id='1111'
                            title="پروزه برنامه نویسی js در سطح مقدماتی "
                            price={99000}
                            rating={4}
                            image='https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2010/wikagraphic201036508.jpg'
                        />
                        <Product
                            id='1112'
                            title="پروزه برنامه نویسی React در سطح مقدماتی وپیشرفته با زیرنویس فارسی "
                            price={909000}
                            rating={5}
                            image='https://community-cdn-digitalocean-com.global.ssl.fastly.net/kGQK9SWXeyKu3mZzQETj4VJD'
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                        id='1113'
                        title= "پروژه آموزشی با next همراه با آموزش react یکی از بهترین برنامه نویسای اپل"
                        price={899000}
                        rating={4}
                        image='https://i.morioh.com/2022/03/21/cad12059.webp'
                        />
                        <Product 
                        id='1114'
                        title= "آموزش اولیه جاوا css همرا با دوره html در سطح مقدماتی ولی بسیار کامل"
                        price={189000}
                        rating={2}
                        image='https://site2go.ru/uploads/images/articles/1550693893_wS7psO.png'
                        />
                        <Product 
                        id='1115'
                        title= "ماشین لرنینگ  یکی از داغ ترین متد های شناخت کامل ماشین با زبان محبوب و کاربردی Paython"
                        price={1899000}
                        rating={4}
                        image='https://dotnet.microsoft.com/static/images/redesign/learn/apps/ml-dotnet.svg?v=XdqN9k2MWgJlWm37uG0OecQ-8ySEtSWarV82-w9RvWE'
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                        id='1116'
                        title= "بوت کمک آنلاین برنامه نویس آماده برای ورود به بازارکار با زبان محبوب جاوااسکریپت"
                        price={909000}
                        rating={5}
                        image='https://raw.githubusercontent.com/t-ho/mern-stack/assets/assets/mern-logo.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Home;