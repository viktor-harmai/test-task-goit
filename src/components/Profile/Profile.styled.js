import styled from 'styled-components';
import bgimg from 'img/bg-img.png';

export const ProfileItem = styled.li`
  border-radius: 20px;
`;

export const ProfileCard = styled.article`
  position: relative;

  width: 380px;
  height: 460px;

  padding: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  border-radius: 20px;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
  }
`;

export const Logo = styled.img`
  display: inline-block;
  margin-bottom: 172px;
`;

export const ProfileCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileCardThumb = styled.div`
  margin-bottom: 45px;
`;

export const Rectangle = styled.div`
  width: 380px;
  height: 8px;

  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Circle = styled.div`
  margin: 0 auto;
  position: relative;
  top: -36px;

  width: 80px;
  height: 80px;

  background-color: #ebd8ff;
  padding: 9px;

  border-radius: 50%;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: inset -2px 2px 2px #fff;
    border-radius: 50%;
  }
`;

export const Inner = styled.div`
  width: 62px;
  height: 62px;

  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  transition: all 0.3s ease-in-out;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;

  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.h2`
  margin-bottom: 15px;

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 21px;
`;

export const Item = styled.li`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;

  :first-child {
    margin-bottom: 10px;
  }
`;

export const Background = styled.div`
  width: 308px;
  height: 168px;

  position: absolute;
  top: 28px;
  left: 36px;
  z-index: 1;

  background-image: url(${bgimg});
  background-repeat: no-repeat;
`;
