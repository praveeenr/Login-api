const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button clicked");
  getToken();
});

function getToken() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "_csrf_token=9c%2F2tR3bEOVamHDgfhJJFFzwr219OrI4P4xZ5Y1G8e7BgKT6cJRyiDarJag5VgB%2BCrrZK054115ewT29%2FxKWjQ%3D%3D; _legacy_normandy_session=28uLNQ5WQIh1s3Hv2Rk8Ew+FXfn-I_W8nq-UgnRkDchR-CviOhxG317zPFRmYCUS-4o8P5GvnEG2_CLi7egulWicL2o3RQTsgO3GUNL5OsmVmDlKeHMP2E63qf6fU1wCyRJtu3HcWAnvYTW5AJ713J61a9ORdquMpvaIjkvcSsZjGEVyKLu2O3I5YBKA36Ra2E.vNm0MThGaMQY7G7W1ZUS9SB7-nw.ZFPaZw; canvas_session=28uLNQ5WQIh1s3Hv2Rk8Ew+FXfn-I_W8nq-UgnRkDchR-CviOhxG317zPFRmYCUS-4o8P5GvnEG2_CLi7egulWicL2o3RQTsgO3GUNL5OsmVmDlKeHMP2E63qf6fU1wCyRJtu3HcWAnvYTW5AJ713J61a9ORdquMpvaIjkvcSsZjGEVyKLu2O3I5YBKA36Ra2E.vNm0MThGaMQY7G7W1ZUS9SB7-nw.ZFPaZw; log_session_id=c319277d02f2433b8596ffba8a98daec"
  );

  var urlencoded = new URLSearchParams();

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch(
    "https://osu.test.instructure.com/login/oauth2/token?grant_type=client_credentials&client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Rldi5zdGVtZmx1ZW5jeS5jb20iLCJzdWIiOiI4NTk3MDAwMDAwMDAwMDI3MiIsImF1ZCI6Imh0dHBzOi8vb3N1LnRlc3QuaW5zdHJ1Y3R1cmUuY29tL2xvZ2luL29hdXRoMi90b2tlbiIsImlhdCI6MTY4MzIwOTk2MiwiZXhwIjoxNjg0MTAzNDgwLCJqdGkiOiJkZmZkYmRjZS1hOWYxLTQyN2ItOGZjYS02MDQxODIxOW9udG8ifQ.HaxaqfXqdew8F0GMjtSXmwbyKhCooHpu4b7_wklibPL-DeTdMD0BcREUze47wu5TdQg6wwHIKaTceYfDWK9gX3OY3IRVSRXRjt50YzZktL7oqXZ1gy1PtThiGo9IMdl7Z4Gl-s0HUWP5MY_5SRxb7Rm1n_mDMs9I5mr_4o7YGIo9HJ3KSDVHTHfGUs1esoGzxyUljA3E1RyTv4dc-m36_lWOLizPa1lpe2z7ted7sHvPK5npVLjs10g8IsHWlOdw8oSd3KtvxD459xqFfjFhWPPcDETrCzW6JcqjNnU4xf4G2C1-jRL9HZh32PF26HMXKJp9qaTSWRQ_CK9QyCU4rA&scope=https://purl.imsglobal.org/spec/lti-ags/scope/score",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
