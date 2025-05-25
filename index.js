import{a as u,S as p,i as a}from"./assets/vendor-vwbIfzmB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d="50311976-cfb8a0f5325f69922ed901f36",m="https://pixabay.com/api/";function h(r){return u.get(m,{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.hits).catch(t=>{throw t})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery li a",{});function g(){c.style.display="block"}function L(){c.style.display="none"}function b(){l.innerHTML=""}function S(r){if(r.length===0)return;const t=r.map(s=>`<li>
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
    `).join("");l.insertAdjacentHTML("beforeend",t),y.refresh()}const f=document.querySelector(".form"),w=document.querySelector("input[name='search-text']");f.addEventListener("submit",x);function x(r){r.preventDefault();const t=w.value.trim();if(t===""){a.show({title:"Caution",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Not valid data",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ffa000",progressBar:!1,position:"topRight"});return}b(),g(),h(t).then(s=>{S(s)}).catch(()=>{a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",messageColor:"#fff",maxWidth:"360px",messageSize:"16",messageLineHeight:"140%",position:"topRight"})}).finally(()=>{L(),f.reset()})}
//# sourceMappingURL=index.js.map
