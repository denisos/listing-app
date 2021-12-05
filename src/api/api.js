
export async function getListings() {
  const res = await fetch('https://api.simplyrets.com/properties', {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${btoa('simplyrets:simplyrets')}`
    }
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }
  
  return res.json();
}