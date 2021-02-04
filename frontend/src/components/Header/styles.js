import styled from "styled-components";

export const MainHeader = styled.header`
  
  background: #28262e;

  @media (min-width: 1801px) {
    padding: 20px;
  }

  @media (max-width: 1800px) {
    padding: 20px;
  }

  @media (max-width: 1600px) {
    padding: 20px;
  }

  @media (max-width: 1200px) {
    padding: 15px;
  }    
  
  @media (max-width: 900px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (min-width: 1801px) {
    padding: 0 20px;
  }

  @media (max-width: 1800px) {
    padding: 0 20px;
  }

  @media (max-width: 1600px) {
    padding: 0 20px;
  }

  @media (max-width: 1200px) {
    padding: 0 15px;
  }    
  
  @media (max-width: 900px) {
    padding: 0 10px;
  }

  @media (max-width: 600px) {
    padding: 0 5px;
  }

  > a {
    background: transparent;
    border: 0;
    margin-right: 30px;
    cursor: pointer;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }

  a {
    > img {

      @media (min-width: 1801px) {
        width: 80px;
      }

      @media (max-width: 1800px) {
        width: 80px;
      }

      @media (max-width: 1600px) {
        width: 80px;
      }

      @media (max-width: 1200px) {
        width: 80px;
      }    

      @media (max-width: 900px) {
        width: 70px;
      }

      @media (max-width: 600px) {
        width: 60px;
      }
    }
  }


  button {
    margin-left: auto;
    background: transparent;
    border: 0;
    width: 30px;
    height: 30px;
    background: transparent;
    z-index: 999;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  
  @media (min-width: 1801px) {
    margin-left: 80px;
  }

  @media (max-width: 1800px) {
    margin-left: 80px;
  }

  @media (max-width: 1600px) {
    margin-left: 80px;
  }

  @media (max-width: 1200px) {
    margin-left: 80px;
  }    
  
  @media (max-width: 900px) {
    margin-left: 80px;
  }

  @media (max-width: 600px) {
    margin-left: 30px;
  }

  img {
    border-radius: 50%;

    @media (min-width: 1801px) {
      width: 56px;
      height: 56px;
    }

    @media (max-width: 1800px) {
      width: 56px;
      height: 56px;
    }

    @media (max-width: 1600px) {
      width: 42px;
      height: 42px;
    }

    @media (max-width: 1200px) {
      width: 48px;
      height: 48px;
    }    
    
    @media (max-width: 900px) {
      width: 44px;
      height: 44px;
    }

    @media (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: #f4ede8;

    @media (min-width: 1801px) {
      font-size: 18px;
    }

    @media (max-width: 1800px) {
      font-size: 18px;
    }

    @media (max-width: 1600px) {
      font-size: 16px;
    }

    @media (max-width: 1200px) {
      font-size: 15px;
    }    
    
    @media (max-width: 900px) {
      font-size: 14px;
    }

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  strong {
    color: #ff9000;

    @media (min-width: 1801px) {
      font-size: 20px;
    }

    @media (max-width: 1800px) {
      font-size: 18px;
    }

    @media (max-width: 1600px) {
      font-size: 17px;
    }

    @media (max-width: 1200px) {
      font-size: 16px;
    }    
    
    @media (max-width: 900px) {
      font-size: 15px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;