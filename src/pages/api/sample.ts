import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    profile: {
      span: '풀타임, 파트타임',
      description: '법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.',
      h1: '최고의 실력',
      h2: '을 가진',
      h3: '외국인 인재를 찾고 계신가요?',
      mDesc1: '법률 및 인사관리 부담없이',
      mDesc2: '1주일 이내에 원격으로 채용해보세요.',
      underlineCont: '개발자가 필요하신가요?',
    },
  };

  res.status(200).json(data);
};

export default handler;
