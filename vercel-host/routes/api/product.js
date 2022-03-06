const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const privateKey = `MIIEpQIBAAKCAQEAsiCBRFSzsKBUPM5uANh90sVdi63o1HYyHbhUhg/aDMNsHzQd
    nd/P5b3vE2sFq0GrgoFFCDhqUVepy2twvoIFOS0JAajsWkxJVIwUlX7Bj476EAtW
    ejEx7blAbVRf25UgDyJUeo+M7jGEru9jfjk1wb40bnlXWU5mc+rUsTki++EYNEz0
    1keD1YSOkbZuM6hMLexMQrIzaM6K1QfgyRHVORRF/H71Y3quKrAtJpH6wVqS65Gt
    qxuxkCRHVGuKugyr8XBFy44F5dOA/rH5G9H9dL1XR48VxWaUTjzDB5g5EdaG9RgA
    BfcCkA7jKI7mintftUHOPnk2b7xT8bwWCt2slQIDAQABAoIBAQCUp/f5tM65qzRi
    As1fO03Wpwwo1Bypo3KzxvATagtJ95W2fOHyraRtUZPCmuCCSi3+ni+kaqCf/g8g
    SywucYg2bVVE41tNCLlyK+3JzZ1wV5xt42hqVcAbay1PkMjnEo9M0hO6rS6qYv0e
    mX5pCwnIBRrwz6eMSpfKScLznIGLvqxl3ch0zvi7Cf3GfTbD+npUecslEQyEcdC8
    K/R9OUxMcWWCk+yq8pIx+2LLid6grW07FRN38019S2k9z2XxdwCosMmaUvidXiZw
    jTi34o045OaLuFrCy1oygMcjoOBBbs0GkpWqryYcLvntVrukjWuQTSvF7xTcpjKY
    oqRInhZBAoGBAOF1FM8Nr2iMC179/2UFto78VUBGQEW4WAKdwFdg+XwMnTuEGrXT
    TUiMft2AKO0cfRq+WnIcK3g7RHXnOk8KR2QW57EYNHJw3o29KqGUkc3jyFl5i3fj
    AnvMG2pXm1sDjNyut6oLyDx2PTsvmAafrrw6aPbUS53SUTv3mB75lmLJAoGBAMpB
    /nszle/cSAH+xirAnmK92RBHY8HyaTI+NBcqrW1gVjFY7Aa6OM/uITADqctdRUai
    ibO2rEYY7jQkzKOeoqACXi7HwSv1SRuqNPeNae5z19pLfxaejzVqkq8Po+Fxb7Tw
    sgBpA+L25/Q1XAuvG4i1TdsUREF94ou2+kaHUjVtAoGBAMsabU+FlZJKLug5Sv0X
    43j2ClqnrrjgM7DPqflNbBL7Th3SiTlpjEKiBpvGG5hXRMB14QbRJ7vdMHRChL21
    ldCt7bUVCBJcabEoS6JaM+tVmyQ3oZOz1oXtvnjTSSn5jck0QFKY4J7PKaQK4Rp+
    eawptms9no0jbXjnOIwW7go5AoGAUZOWkZh31Buzy2I4CUxRVaAe6YrxuGsOdN5T
    4jgrZN8jRJoJ8Jixi2QPbK89j7GZ3Gh4Q8zc5RTvFob1JtU34HO0Cwg0aIdxKkBX
    RrV50VxV5kznAHeJaVEHwqX7QlWfaYpfMP0qPSO64GuZKXlCELyXn1IoSYX9lr6B
    aWrxBG0CgYEAt5pY/qOzYVS9kC4OcY6yQNm5c5ixVx8f2sz7TwUY8DDqj0Pde8hQ
    Xbwo9oJAE42NAN5QTdqrlBSaSy0c6y8NoxrPd/0XR4dZgLHq8jOPgHx/ncGxsirM
    ARdpnL9qBg38FeWGgEEPQC2RiJhu96+c6DtPRBFdyHdl0WUKchCVC88=`;

  const exp = Math.floor(Date.now() / 1000) + 60 * 60;
  const token = jwt.sign({ exp }, privateKey, { algorithm: "RS256" });
  console.log(token);
  return res.json({ token });
});

module.exports = router;
