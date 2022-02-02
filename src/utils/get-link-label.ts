export const getLinkLabel = (link: string) => {
  const findMatch = link.match(
    /(mailto:|tel:|twitter|linkedin|who-we-are\/people)/
  );

  const linkMap: Record<string, string> = {
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    mailto: 'email address',
    tel: 'phone number',
    'who-we-are/people': 'profile'
  };

  return findMatch ? linkMap[findMatch[1]] : '';
};

export default getLinkLabel;
