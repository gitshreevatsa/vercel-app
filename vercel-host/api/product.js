import { sign } from "jsonwebtoken";


module.exports = (req, res) => {
  if(req.methods == 'GET'){
  const privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIIEpAIBAAKCAQEAx+HFBFoUsfwZ3ddrmAeE46gsl89OF62q65Y8NdRsiT22sxS7
  t7G2xVhIk6z3k7kSL3YLXdpaGxqTj8dOn+MHs//O03v/DuMq1tXasbjyfxgcjlul
  S4Y1pxzw45FsgkO42ZgxgI5kdseKAU6JAFttfWHwUpUGQEiWwAAz3Qp7KWYnhIPX
  q1XxFUirpYBrhPUJkt65074Kpp0xmfQ7O8gaFuTtvPu3GKSmhYL/txeQTTYj/6Oh
  RgNCgJrUvAinVZWtvXtu6XqdgXlRmUR/KIIbmIXTWBgu0FFCCgKRA77LxiRKO0ys
  u+7ZdACCDzEIKjMN9UaQqyYObvTy2XJlGDwPXQIDAQABAoIBAQDH321hYqqbKBq9
  iPJgPfSWqc6dp4DRkKn/lmVy9o3p1rpg7PShRaYcRKGeejG/mCslJodLPFMqEzNH
  bOekXiOPzNcHB1EPk/18grCDUwu6J2Q2vlHV6ciw6PHAveShhhLME7I8eSbg17ua
  fuvkXYho/oyQJ9DuayfDqvAxso9h3q5g5BRKnokhSLH9v9LMcCm3RQWHeAtL7FbD
  0L0/A5q2eiuBJlN6U4Z8ZygGGKC3h0EN7H2kyWYXBrnBIv69a3DwcpbYWC1vDUjZ
  kecxyEVCyyNOas6Q/mUJ7vK4A9i/Y3KjNfkpmteJw4OYTtfUXu4BOdHbxHl+eLz3
  XHMe/E9JAoGBAOY7HZo8ViO9M0yrn7oDqryYMEVSqOJxLVyUuotIpJaGIrJqpUF3
  pJfEZo1Kd12p41FKgI1XNIEMSvr3kzmbSToUXaE5kxYUiHzUwK/o4QIMR/yzyhkb
  sQc2QLt6eoZk5pK/+cOQOSHNDkzA/OfAc51nsxIHmGmO5PusyU2965XbAoGBAN5B
  DbePQTobHRHC1HLcig1SwGfYfkRDsE7WBdB7o7rXG+YKWhEHj9sQx21VVV09gA56
  bRLxhbwB2CQNLT9JhWO/GnJeQd5aY/fD7w1Sbcgaio0kLPh2mMi8iapx94YEgsv+
  01PM9vkE2ePBvpdbdpGbrcfCiY2U7yV67EllRSEnAoGAVWsbaYz3PJ1Guix2v3H6
  16vzRNUNOa5Z8R5xM5oJDpvHpcBxfZ+hHnnMvqEhNkwAvblRhp8TKMnhy8ktA1N8
  0KKbtmSBENEfbokU0G8rhDIAR16BHd2rSYy0aZpgeRpYfZviU89fkw3cP1fevTEm
  9AB0bL0KrCdLB6Essr5C+L8CgYEAo+aBgR6J0ZnxJAnztgjhXdXqwiorY5gvStQW
  UZr8MWs0zb5QkUJsWfbTutM1Mp+J8iNikJfAMdeCV4PIHGXRkq95h2HvXVR3aF37
  ym1BPFImXtOQvmJnZZF0TFfjW9ezxVBU8/WxJA7pyEY2kVQH6nVOAIR8AAcXHSK7
  YZznD/0CgYBgDHWq5lhDMy8K49T4jseP9IjHJk2NuICm4/Qso/TK1mSS71qD0Zmf
  EkJMFP9xNPsApTAx5AAS+PRzyTrtQHP28jTXHhlMrzEwXeRG7DeXMi69z3I1oEG0
  cocQp5AFoldSQlzrFp1XtRqxIuyq6SOB8FB0o/zxgjlfB3FeoBBSQA==
  -----END RSA PRIVATE KEY-----`;

  const exp = Math.floor(Date.now() / 1000) + 60 * 60;
  const token = sign({ exp }, privateKey, { algorithm: "RS256" });
  return res.json({ token });
  }
};

