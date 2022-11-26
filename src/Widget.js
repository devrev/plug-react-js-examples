import React, { useEffect } from 'react'

const Widget=() => {
    const config = {
        auth: {
          // Public application access tokens can be used to provision anonymous rev users.
          // This example App token expires on nov 12th,2025.
          // Replace this with your org's public application access token. The token can be found in the DevRev app. Settings → Support
          appToken:
            "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiZXhwIjoxODI2ODAxMzM4LCJodHRwOi8vZGV2cmV2LmFpL2NsaWVudGlkIjoiMmIwRHVmIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by92ZWQ5cjhlQSIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2b2lkIjoiREVWLXZlZDlyOGVBIiwiaHR0cDovL2RldnJldi5haS9zdmNhY2MiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vdmVkOXI4ZUE6c3ZjYWNjLzJiMER1ZiIsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTphYXQ6cHVibGljIiwiaWF0IjoxNjY5MTIxMzM4LCJpc3MiOiJodHRwczovL2F1dGgtdG9rZW4uZGV2cmV2LmFpLyIsImp0aSI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by92ZWQ5cjhlQTp0b2tlbi9jeVc1aFpObCIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by92ZWQ5cjhlQTpzdmNhY2MvMmIwRHVmIn0.PDdRQPQGqCR1wdKK2G-0XuMuXMX9BQgh4ak7kGnCw1ll7Qeb3ImFbwkQh1mTOaRo7pT4l3XaBr-XuVhNTcb6RNze9t52hl351OaMs8shOIfOcrMA0suB0oR8XmQvgLeZj3KMcLYLYqMoDq8fBPyP8q_t137jGXY7BgVxaHkj0YGH9tD4HcKnMR3SNToMRZpS6rB6mRe0h8IujgfwCe5ik_tmkN5oh_1WEDZ11S64Yxjnfg2PDI65-lnTlkCg56FO62Y7EAhVWRvBc6h3qe7ETz2VWpfr4KDcGjqHCVFANJirEKeel7i3MnWA8BEIyvCqFWcY7qvjczZ77y1d6kwGwA",
        },
        style: {
          theme: 'dark',
          alignment: 'right',
          horizontalOffset: "20px",
          verticalOffset: "20px",
          logo: "https://app.devrev.ai/static/profile-circle-black.png",
        },
    };

    const callbacks = {
        onReady: () => {
          console.log("widget is ready!");
        },
        onOpen: () => {
          console.log("widget opened");
        },
        onClose: () => {
          console.log("widget closed");
        },
    };

    const runScript = ()=>{
      new window.Plug(config,callbacks);
    }

    useEffect(()=>{
      const script = document.createElement('script');
      // Replace your org slug to consume the widget.js file -- "https://plug.devrev.ai/{YOUR_ORG_SLUG}/widget.js" 
      script.src = "https://plug.devrev.ai/devrev/widget.js";
      document.body.appendChild(script);
      script.onload = runScript;
    },[])

  return (
    <div>Plug React Js Example</div>
  )
}

export default Widget;