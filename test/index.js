async function deploy(i) {
    console.log('执行进程 ', i);
    const response = await fetch("https://30.171.249.100/cgi/capi?cmd=CreateOpenEdgeResources&action=delegate&serviceType=teo&secure=1&version=3&dictId=2841&withLanguage=1&sts=1&t=1741251533497&uin=100016016290&ownerUin=2792294370&csrfCode=2071350384", {
        "headers": {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "eo-pages-token": "fc49baeb3e908aaaaddefce91a7a264c",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-lid": "HkM-2fkDoyx",
        "x-life": "290708",
        "host": "console.cloud.tencent.com",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "qcloud_uid=nDo-1WzRrdVh; lastLoginType=wx; qcommunity_identify_id=V_00ia2OAHlZYRqEiCOhD; _gcl_au=1.1.587689655.1733885446; pgv_pvid=5646648399; mfaRMId=d313585a1316c76437830b001a05b27b; nodesess=b1e4b273-31b5-4a00-28e1-01d019090a0d; _ga_DW9MBJC8M8=GS1.1.1737008234.6.1.1737010460.58.0.0; _ga=GA1.2.659232453.1726037751; x-client-ssid=0310b00b:019472f22f7f:01b6bd; x-imp-host-key=19472f22f80-ccea27eadbdc1b6eea765116ea99b74b1ca1e130; x_host_key_access_https=51fa42e5afb97220510d458f24b165ccf0620439_s; hy_source=web; hy_user=yorkyu; hy_token=9vL2m6vlJ0LO9EEUq725Kf2LLyVeRome6N7hogBUUQDHtKVVmm56ONx9djJZNB5v; qcstats_seo_keywords=%E5%93%81%E7%89%8C%E8%AF%8D-%E5%93%81%E7%89%8C%E8%AF%8D-%E7%99%BB%E5%BD%95; _qimei_uuid42=19215151a351003590026b930e4e134bbe1b487903; _qimei_i_3=47bf2f86915f068d94c2ab39598d7be2ffbca5f6460d5287b2dc2b0a74c72568303661973989e288b793; _qimei_h38=d896b5f390026b930e4e134b03000006919215; wework_outh2_state=9u1z2e6jubu; lusername=edgeone_pages%40tencent.com; from_column=22553; trafficParams=***%24%3Btimestamp%3D1740729475864%3Bfrom_type%3Dserver%3Btrack%3D3b899246-d165-4fe8-aa59-8aab28792bee%3B%24***; _qimei_fingerprint=f3be8fb57dd70796a761d4447cec0372; _qimei_i_1=53da7bd69d535689c4c1fd395b8471e6a5e7a7f1475f5683b78b7a582593206c6163319c3980e0ddd395af82; refreshSession=1; universal_uin=N30PirWBYtjh709wJBbHBPzZNm0JaR3Q; intl_sid=18b5bf2517d4436304; cn_en_tag=0; universal_session_id=29YXuWETYAYnKpGcXFuWb; qcloud_visitId=aef0afcda04094049a8d0f81af8c3762; qcmainCSRFToken=szvE5JXR; saas_jump_login_sid=SaaSSid9d6534cf-40a8-2fc9-e7de-c5be8c2629f8; qcloud_from=qcloud.directEnter.account-1741189091846; googleRedirectUri=https://www.tencentcloud.com/account/login?s_url=https%3A%2F%2Fconsole.tencentcloud.com%2Fedgeone%2Fpages%2Fnew%3Ftemplate%3Dhttps%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind; 450200001339_register_step=2; partner_account_role_450200001339=-1; language=zh; buffet-version=3e8cea81ae-master; buffet-ticket=178863; intl_language=zh; _gat=1; loginType=wx; qcloud_outsite_refer=https://open.weixin.qq.com; intl=1; uin=o100016016290; tinyid=144115226563922779; skey=cZsRfWkyLcOIbJAl0J7q7ixnFhSlAlRR9d0LFv3o2uE_; lastLoginIdentity=24df889a2bdccc79e3630bb3b5c8cabb; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22100016016290%22%2C%22first_id%22%3A%22191d9bb1d3010a5-0b5f965e88ac7e-17525637-3686400-191d9bb1d312247%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%A4%BE%E4%BA%A4%E7%BD%91%E7%AB%99%E6%B5%81%E9%87%8F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkxZDliYjFkMzAxMGE1LTBiNWY5NjVlODhhYzdlLTE3NTI1NjM3LTM2ODY0MDAtMTkxZDliYjFkMzEyMjQ3IiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiMTAwMDE2MDE2MjkwIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%22100016016290%22%7D%2C%22%24device_id%22%3A%22191d9bb1d3010a5-0b5f965e88ac7e-17525637-3686400-191d9bb1d312247%22%7D; regionId=1; nick=EdgeWebYork; appid=1251557890; moduleId=1251557890; systemTimeGap=-84; ownerUin=O2792294370G; saas_synced_session=100016016290%7CcZsRfWkyLcOIbJAl0J7q7ixnFhSlAlRR9d0LFv3o2uE_",
        "Referer": "https://console.cloud.tencent.com/edgeone/pages/project/pages-5u4iwiqpzvgl/deployment/0ubfsq6zyu",
        "Referrer-Policy": "no-referrer-when-downgrade"
        },
        "body": "{\"regionId\":1,\"serviceType\":\"teo\",\"cmd\":\"CreateOpenEdgeResources\",\"data\":{\"Version\":\"2022-09-01\",\"Region\":\"ap-guangzhou\",\"Interface\":\"pages:CreateRedoPagesDeployment\",\"Payload\":\"{\\\"ProjectId\\\":\\\"pages-5u4iwiqpzvgl\\\",\\\"DeploymentId\\\":\\\"0ubfsq6zyu\\\"}\"}}",
        "method": "POST"
    });

    const result = await response.json();
    console.log(JSON.stringify(result));
}

deploy(1);
deploy(2);
deploy(3);
deploy(4);
