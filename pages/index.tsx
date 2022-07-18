import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './../component/Header/Header';
import Table from './../component/Table/Table';
import Modal from './../component/Modal/Modal';
import Main from './../component/Main';
import { fetchRequest } from '../hooks/request';
import { options } from './../component/diagram/MainDiagram';

const Home = (
    {
        orders = []
    }:
    {
        orders: any[]
    }
) => {
  return (
    <Main>
     
     <section className="home section" id="home">
        <div className="home_container">
            <div className="home_socials">
                <div className="social_icon icon"><img src="/assets/img/icons/facebook.png" alt="facebook" className="social_img img icon" /></div>
                <div className="social_icon icon"><img src="/assets/img/icons/instagram.png" alt="instagram" className="social_img img icon" /></div>
                <div className="social_icon icon"><img src="/assets/img/icons/whatsapp.png" alt="Whats App" className="social_img img icon" /></div>
            </div>
        
            <div className="homedesc">
                <div className="homedesc_title">
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="homedesc_subtitle">
                    Lorem, ipsum dolor.
                </div>
                <div className="homedesc_text">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Corrupti quam laborum 
                    veniam nihil quidem sequi nemo nostrum 
                    in dolor vel.
                </div>
                <div className="homedesc_btn_wrap">
                    <button className="homedesc_btn">
                        Позвонить мне
                        <img src="/assets/img/icons/next.png" alt="" className="button_icon img icon" />
                    </button>
                </div>
            </div>
            <div className="home_img_wrap">
                <img src="/assets/img/perfil.png" alt="Здесь моя фотография" className="home_img img" />
            </div>
        </div>
      </section>

      <Table options={orders}/>
      
    </Main>
  )
}

export default Home

export async function getServerSideProps(params:any) {
    const { requestApi } = await fetchRequest()

    const res = await requestApi("order")
    
    return {
        props: {
            orders: res
        }
    }
    
} 
