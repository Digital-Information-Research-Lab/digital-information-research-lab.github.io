"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[334],{5323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"clientComponents/productCardPage","title":"<span class=\\"h1style\\">Product Card</span>","description":"Welcome to the documentation for the Product Card! This guide will help understand the code and its features. This page is verified by: Vedant Kejariwal","source":"@site/docs/clientComponents/productCardPage.md","sourceDirName":"clientComponents","slug":"/clientComponents/productCardPage","permalink":"/docs/clientComponents/productCardPage","draft":false,"unlisted":false,"editUrl":"https://github.com/Digital-Information-Research-Lab/digital-information-research-lab.github.io/edit/documentation/docs/clientComponents/productCardPage.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"ProductCard","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"FeedbackPage","permalink":"/docs/clientComponents/feedbackPage"},"next":{"title":"ResultsCard","permalink":"/docs/clientComponents/resultsCard"}}');var a=n(4848),s=n(8453);const c={sidebar_label:"ProductCard",sidebar_position:2},i="Product Card",d={},o=[{value:'<span class="h2style">Functions</span>',id:"functions",level:2},{value:'<span class="custom-function-heading">Function: UpdateBasket()</span>',id:"function-updatebasket",level:3},{value:'<span class="custom-heading">Description</span>',id:"description",level:4},{value:'<span class="custom-heading">Parameters</span>',id:"parameters",level:4},{value:'<span class="custom-heading">Returns</span>',id:"returns",level:4},{value:'<span class="custom-heading">Code</span>',id:"code",level:4},{value:'<span class="custom-heading">Logic Explanation</span>',id:"logic-explanation",level:4}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"product-card",children:(0,a.jsx)("span",{class:"h1style",children:"Product Card"})})}),"\n",(0,a.jsxs)(t.p,{children:["Welcome to the documentation for the Product Card! This guide will help understand the code and its features. This page is verified by: ",(0,a.jsx)(t.em,{children:"Vedant Kejariwal"})]}),"\n",(0,a.jsx)(t.h2,{id:"functions",children:(0,a.jsx)("span",{class:"h2style",children:"Functions"})}),"\n",(0,a.jsx)(t.p,{children:"This is the list of functions that are defined on this page."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#function-updatebasket",children:"UpdateBasket()"})}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"function-updatebasket",children:(0,a.jsx)("span",{class:"custom-function-heading",children:"Function: UpdateBasket()"})}),"\n",(0,a.jsx)(t.h4,{id:"description",children:(0,a.jsx)("span",{class:"custom-heading",children:"Description"})}),"\n",(0,a.jsx)(t.p,{children:"This function handles adding or removing a product from the consumer's cart. It also updates the player's wallet based on the product's price and whether a warranty is added."}),"\n",(0,a.jsx)(t.h4,{id:"parameters",children:(0,a.jsx)("span",{class:"custom-heading",children:"Parameters"})}),"\n",(0,a.jsx)(t.p,{children:"None"}),"\n",(0,a.jsx)(t.h4,{id:"returns",children:(0,a.jsx)("span",{class:"custom-heading",children:"Returns"})}),"\n",(0,a.jsx)(t.p,{children:"None"}),"\n",(0,a.jsx)(t.h4,{id:"code",children:(0,a.jsx)("span",{class:"custom-heading",children:"Code"})}),"\n",(0,a.jsx)("div",{class:"custom-code-block",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'function UpdateBasket() {\n  /**\n   * This function handles adding and removing a producer\'s product from the consumer\'s cart.\n   * It checks whether the product is already in the cart and toggles its state accordingly.\n   */\n\n  // Check if the producer\'s product is not in the current cart\n  if (currentCart.indexOf(producer.get("name")) === -1) {\n    // Ensure the consumer has enough money in their wallet\n    if (player.get("wallet") >= productPrice) {\n      // Add the producer\'s product to the cart\n      currentCart.push(producer.get("name"));\n\n      // Check if the product has a warranty\n      if (String(warrants.slice(-1)[0]).toUpperCase() === "TRUE") {\n        // Deduct the product price plus warranty cost from the wallet\n        player.set("wallet", player.get("wallet") - (productPrice + warrantCost));\n      } else {\n        // Deduct only the product price from the wallet\n        player.set("wallet", player.get("wallet") - productPrice);\n      }\n\n      // Update the player\'s cart with the modified cart array\n      player.set("cart", currentCart);\n\n      // Notify the user that the product has been added to the cart\n      toast("\ud83d\uded2 Product added to cart!");\n    }\n  } else if (currentCart.indexOf(producer.get("name")) !== -1) {\n    // If the product is already in the cart, remove it and refund the money\n\n    // Remove the product from the cart using a filter\n    currentCart = currentCart.filter((p) => p !== producer.get("name"));\n\n    // Update the player\'s cart with the modified cart array\n    player.set("cart", currentCart);\n\n    // Check if the product had a warranty\n    if (String(warrants.slice(-1)[0]).toUpperCase() === "TRUE") {\n      // Refund the product price plus warranty cost to the wallet\n      player.set("wallet", player.get("wallet") + (productPrice + warrantCost));\n    } else {\n      // Refund only the product price to the wallet\n      player.set("wallet", player.get("wallet") + productPrice);\n    }\n\n    // Notify the user that the product has been removed from the cart\n    toast("\ud83d\udeae Product removed from cart!");\n  }\n\n  // Debugging information (optional)\n  // console.log("currentCart: ", currentCart);\n}\n'})})}),"\n",(0,a.jsx)(t.h4,{id:"logic-explanation",children:(0,a.jsx)("span",{class:"custom-heading",children:"Logic Explanation"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Check if the product is already in the cart:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Uses ",(0,a.jsx)(t.code,{children:'currentCart.indexOf(producer.get("name"))'})," to determine if the product is in the cart."]}),"\n",(0,a.jsxs)(t.li,{children:["If not in the cart (",(0,a.jsx)(t.code,{children:"-1"}),"), it adds the product to the cart."]}),"\n",(0,a.jsx)(t.li,{children:"If in the cart, it removes the product."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Handle wallet updates:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Deducts the product price (and warranty cost, if applicable) when adding a product."}),"\n",(0,a.jsx)(t.li,{children:"Refunds the product price (and warranty cost, if applicable) when removing a product."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Update the cart and wallet:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Uses ",(0,a.jsx)(t.code,{children:'player.set("cart", currentCart)'})," to update the cart."]}),"\n",(0,a.jsxs)(t.li,{children:["Uses ",(0,a.jsx)(t.code,{children:'player.set("wallet", player.get("wallet") \xb1 productPrice)'})," to update the wallet balance."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Notifications:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Displays a toast message indicating whether the product was added or removed from the cart."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);