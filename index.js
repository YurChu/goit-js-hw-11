import{a as u,S as p,i as n}from"./assets/vendor-Dl6Guels.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="50311976-cfb8a0f5325f69922ed901f36",g="https://pixabay.com/api/";function m(o){return u.get(g,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.hits).catch(t=>{throw t})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new p(".gallery li a",{});function y(){c.style.display="block"}function b(){c.style.display="none"}function L(){l.innerHTML=""}function S(o){if(o.length===0){n.show({message:"Sorry, there are no images matching <br/> your search query. Please try again!",messageColor:"#fafafa",messageSize:"16px",messageLineHeight:"20px",backgroundColor:"#ef4040",progressBar:!1,position:"topRight"});return}const t=o.map(s=>`<li>
          <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}"/>
          </a>
          <ul class="gallery-info">
            <li>
              <span class="gallery-info-subtitle">Likes</span>
              <span>${s.likes}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Views</span>
              <span>${s.views}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Comments</span>
              <span>${s.comments}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Downloads</span>
              <span>${s.downloads}</span>
            </li>
          </ul>
        </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}const f=document.querySelector(".form"),w=document.querySelector("input[name='search-text']");f.addEventListener("submit",x);function x(o){o.preventDefault();const t=w.value.trim();if(t===""){n.show({title:"Caution",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Not valid data",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ffa000",progressBar:!1,position:"topRight"});return}L(),y(),m(t).then(s=>{S(s)}).catch(()=>{n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",maxWidth:"360px",messageSize:"16",messageLineHeight:"140%",position:"topRight"})}).finally(()=>{b(),f.reset()})}
//# sourceMappingURL=index.js.map
