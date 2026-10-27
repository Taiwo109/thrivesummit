import { useEffect, useRef } from "react";

const FORMS = {
  sponsorship: { id: "form-script-tag-25955935", url: "https://aanu.systeme.io/public/remote/page/461159941d89eb0b770805f1a30d8fe7d52a6d49.js", title: "Thrive Summit sponsorship enquiry form" },
  contact: { id: "form-script-tag-25956081", url: "https://aanu.systeme.io/public/remote/page/46116337ab54e5bb2c02bee5b8b9d234d985a4a9.js", title: "Thrive Summit Contact Us form" },
} as const;

/** Isolate provider globals and message listeners so leaving a route destroys them. */
export function SystemeForm({ kind }: { kind: keyof typeof FORMS }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const form = FORMS[kind];
  useEffect(() => {
    const resize = (event: MessageEvent) => {
      if (event.source !== frame.current?.contentWindow || event.data?.type !== "thrive-form-height") return;
      const height = Number(event.data.height);
      if (frame.current && Number.isFinite(height) && height > 0 && height < 20000) frame.current.style.height = `${Math.ceil(height)}px`;
    };
    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, []);
  const document = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>html,body{margin:0;padding:0;width:100%;overflow-x:hidden}iframe{max-width:100%!important;width:100%!important;display:block}</style></head><body><script id="${form.id}" src="${form.url}"></script><script>function report(){var f=document.querySelector('iframe');if(f){f.title=${JSON.stringify(form.title)};var h=Number(f.getAttribute('height'));if(h>0)parent.postMessage({type:'thrive-form-height',height:h},'*')}}new MutationObserver(report).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['height']});window.addEventListener('resize',report);report();</script></body></html>`;
  return <iframe ref={frame} title={form.title} srcDoc={document} sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" className="systeme-form w-full border-0" />;
}