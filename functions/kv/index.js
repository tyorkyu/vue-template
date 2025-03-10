export async function onRequestGet({ request, params, env }) {
    // 读取 Key-Value 数据
    const visitCount = await APP.get('visitCount');
    
    let visitCountInt = Number(visitCount);
    visitCountInt += 1;

    // 写入 Key-Value 数据
    await APP.put('visitCount', String(visitCountInt));
  
    const res = JSON.stringify({
      visitCount: visitCountInt,
    });
  
    return new Response(res, {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    });
}