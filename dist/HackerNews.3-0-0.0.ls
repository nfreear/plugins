import PluginBase from 'chrome-extension://lnnmjmalakahagblkkcnjkoaihlfglon/dist/modules/plugin-base.js';import ExtensionUtil from 'chrome-extension://lnnmjmalakahagblkkcnjkoaihlfglon/dist/modules/extension-util.js';function getThingAtIndex(index){return document.evaluate(`//table[contains(@class, 'itemlist')]//tr//td//*[contains(@class, 'rank')][contains(text(), "${index}")]/ancestor-or-self::tr[contains(@class, 'athing')]`,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue}function isInComments(){return "/item"===window.location.pathname}function clickIfExists(el){el&&el.click();}var HackerNewsPlugin={...PluginBase,niceName:"Hacker News",languages:{},description:"Basic controls for news.ycombinator.com.",version:"3.0.0",match:/^https?:\/\/news\.ycombinator\.com/,homophones:{floor:"more",4:"more"},authors:"Miko",commands:[{name:"Hacker News",description:"Go to news.ycombinator.com.",global:!0,match:["hacker news","y combinator"],pageFn:()=>{window.location.href="https://news.ycombinator.com/";}},{name:"Upvote",description:"Upvote a post.",match:["upvote #","upvote"],pageFn:(transcript,index)=>{let parent=document;isInComments()||(parent=getThingAtIndex(index)),parent&&clickIfExists(parent.querySelector('.votearrow[title="upvote"]'));}},{name:"Visit Comments",description:"See the comments for a given post.",match:["comments #","discuss #"],pageFn:(transcript,index)=>{let thing=getThingAtIndex(index);thing&&clickIfExists(thing.nextElementSibling.querySelector('.subtext a[href^="item?id="]'));}},{name:"Visit Post",description:"Visit a post.",match:["visit #","visit"],pageFn:(transcript,index)=>{let parent=document;isInComments()||(parent=getThingAtIndex(index)),parent&&clickIfExists(parent.querySelector("a.storylink"));}},{name:"Next Page",description:"Show more Hacker News items.",match:["next page","show more","more"],pageFn:(transcript,index)=>{clickIfExists(document.querySelector("a.morelink"));}}]};HackerNewsPlugin.languages.ru={niceName:"Хакер Ньюс",description:"Плагин для сайта news.ycombinator.com.",authors:"Hanna",homophones:{"hacker news":"хакер ньюс"},commands:{Upvote:{name:"Голосовать за",description:"Голосует за пост названного номера",match:["голосовать за #","голосовать"]},"Visit Comments":{name:"Открыть комментарии",description:"Открывает комментарии к выбранному посту",match:["комментарии #"]},"Visit Post":{name:"Открыть пост",description:"Кликает на пост названного номера",match:["открыть #","открыть"]},"Next Page":{name:"Следующая страница",description:"Делает видимыми следующие посты",match:["следующая страница","больше"]}}};

export default HackerNewsPlugin;LS-SPLITallPlugins.HackerNews = (() => { function getThingAtIndex(index){return document.evaluate(`//table[contains(@class, 'itemlist')]//tr//td//*[contains(@class, 'rank')][contains(text(), "${index}")]/ancestor-or-self::tr[contains(@class, 'athing')]`,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue}function isInComments(){return "/item"===window.location.pathname}function clickIfExists(el){el&&el.click();}var HackerNewsPlugin={...PluginBase,commands:{"Hacker News":{pageFn:()=>{window.location.href="https://news.ycombinator.com/";}},Upvote:{pageFn:(transcript,index)=>{let parent=document;isInComments()||(parent=getThingAtIndex(index)),parent&&clickIfExists(parent.querySelector('.votearrow[title="upvote"]'));}},"Visit Comments":{pageFn:(transcript,index)=>{let thing=getThingAtIndex(index);thing&&clickIfExists(thing.nextElementSibling.querySelector('.subtext a[href^="item?id="]'));}},"Visit Post":{pageFn:(transcript,index)=>{let parent=document;isInComments()||(parent=getThingAtIndex(index)),parent&&clickIfExists(parent.querySelector("a.storylink"));}},"Next Page":{pageFn:(transcript,index)=>{clickIfExists(document.querySelector("a.morelink"));}}}};

return HackerNewsPlugin;
 })()LS-SPLITallPlugins.HackerNews = (() => { var HackerNewsPlugin={...PluginBase,commands:{"Hacker News":{pageFn:()=>{window.location.href="https://news.ycombinator.com/";}}}};

return HackerNewsPlugin;
 })()