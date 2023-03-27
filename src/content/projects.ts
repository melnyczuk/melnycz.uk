import { ProjectType } from '../types';

const projects: ProjectType[] = [
  {
    name: 'Wool-gather',
    year: 2021,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/yvf5b69uwqs5oa9/wool-gather.md',
    },
    image: {
      name: 'wool-gather-9.jpg',
      width: 1900,
      height: 1267,
      url: 'https://dl.dropbox.com/s/qp5ygldobmn31gy/wool-gather-9.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAArAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APb/ALVFGCzMPmwQFGT+VYreM9BZ8Jqunpg8l7hc/lmsmw8XaXZ2ExXWdNL+bI4UzLk5YkY5rUXxXpRVifEOlckYzKvHH+9UsHijSwrqdf0nIPB81ef/AB6rS+JdJ25OvaWT7TL/APFVIfEmjqu461px/wB2Zf8A4qr1pc/bLVJ4+FYZAZef51jB9UCBf7PtgmOom56fSvmVyfPkHuapuWDGnfOIw5PU4Aq1Ha3LoHCMR9KeqT5Aw1acVnKYWYg/KpPT2r3mF9R+xwJDpcjr5a8i4A3DHpWpDHOzXCzSOxEhCY4wNoOP1r5haMG7mLZA3Hp9ainBQDYB154qay2T3kKNmNdwDEDPHeuxvYLdRDBZsHBP3/U1o6Z4NE2JJi5HoDWtqOi29npVzsjCkRNg9+hr0y1lWGyt0ZiCsSg/KfQVyq6Nq8ZLS6tesM5G0r+vrXgiGRAyEAkscsep5pRHJJlAuc9hVuyt5bedT5ZBbg5Xsa73wx4etYyJ5fMkJ5wxwK7bzUijCoFVfasLXZzJpd2oPJiYA/ga6pNG1sxjGsvjHGY1/wAK1XkUqRuGK8g1Pwbpq67bW1tPepZlwZ55JVOQc/Ko28fU1oJ4N8KqxI1PUlYHg+Yg/wDZamfwh4dWLMeuamrdQTIpx/47Vmw0WwinRB4j1FlPb92P5rW2NBsHQY1zUT/wOP8A+IrA0jQpr3VL+y1K9v5bRXbypkdFG0EDYw28k56j36V6aGZEyoBH92sl2O3rXDal/wAfLn/aNUO9O2qV6UIoDLxWnCi7c45q3pTMLsAE4L813KnK81//2Q==',
    },
  },
  {
    name: 'Silver Coord',
    year: 2021,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/za1nxpudmno19kj/silver-coord.md',
    },
    image: {
      name: 'silver-coord-2.jpg',
      width: 1900,
      height: 1267,
      url: 'https://dl.dropbox.com/s/6utewbu0iov54lx/silver-coord-2.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAArAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APeAAOuBQRTSKpXOoWNrOkNxeW8MrjcqSSBSR6gGpTgjI5BppFRstV5Y8ip9d0mXV9PFvFdNbsGDZA+9jtnt9RUXh/UpLy0NteHZf25KSoxG5gDgP9Dxz61qkV88fF+w1q38XW897++gumxZi3ByoBxtJI+/0rsPBfiFdEWfSp2vrky3CrZwv87dDu+bsBxn6GtO4+Jti1xPp1lZXEmsRSMi2co2hyrYIDjjJGcZrsbO6jvrGG7iBCTIHAYYIz2NPkXitJZYm+7Ih/4EK8W8Z6ZqvhHxqmv6Zd3rQyIRGzt5kaliS6EY6ZxwfX2qPWPitqmp6f8AY4bJLTzF2yzRsWJ9QP7ua5q11e6too7t7u5cwuViBkZtr4wTgnt39c1B4a8V3Vn4nF6weYBzHICPvoxAOD2IPP41v3vhyDxHrtzdWF/cWs7nzGYW/EQ7sSDz0479a9c8PKq6JBEqzARFo8yqQWwx+bnseo+taLjisr7Su3lBUZuQRgL1968N+JWp/YvH8c0asPLjTen8Lrzn9Kdr1lHb20Si4kT79w2TjKDA59zVPwjFZXOtRyXEMM0O9YyH53nkjj14zXQeGPG8mm+MriFfktWuJYbqWZdsaAMfLG768fjXrC+IrgnP2aNl7MH61IPEXZ7Nx9GBrJS5kI9KDcEnljmvKviPbW974v0qG5LxpPsRpgONu7H9aSfSbl5FUzNc3glCxpKMgpnAxjg8569sUeJ/Cd/ok8OpCXEiTeazQcKvr8p5/I10GgxW8VjdXnlW8lhfuZLpFBbDHqcEng9xSWhfSPGEGk2U7nTJrR7gQOdwjIIA2E8heeldLNKrADPT9KmiYiEEHkinhiRzXA+N0WXxf4bRwGUycg/761oa8o07xVBFaARRpcx7VXoNxGRWn4tleSGVHYsqYwD2ySK4jwtK/wDZkybjt6YzxU+g3M0vjlVkcsIdPZEz/CN4OP1rsJpX3N81f//Z',
    },
  },
  {
    name: 'Cone of Power',
    year: 2021,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/d42j52e2h1l8aka/cone-of-power.md',
    },
    image: {
      name: 'cone-of-power-1.jpg',
      width: 6955,
      height: 4639,
      url: 'https://dl.dropbox.com/s/7u8oebqf3gqvqjx/cone-of-power-1.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAArAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/AOH0uEM68V6l4fskW3TA5avURsl0oRlSCsIXnvxXnOtxIkpGOlULQIzAEivRfDsKnRlUfKu5s+9cx4rEMTOip055ryzV1UscVkaYxRhivTfDt4QkKuc/MBgda9WkmWLTpHxjEJP6V5ff6nFenLAq4OOlU4NrSYH516Z4aO7Qlxzh2FcF4wL/ANtSByQoHHv1rgNRIJYL0rFsTjFd74bvER0Upl9wwfxr2a4QPocjHn/Ryf8Ax2vIpkAkOAafApDA16P4UfGg4Y8+a39K4rxxuGsF8Y+Uf1rz29GWOK57T5hIyquSfpXpvhjSJHgSYhfmZeSOnNem6rqkdra2EGW2TS+TJtIBI8tj/MCsHUNOsCIhb4G5SWAfdXO60iWWkXU0dwIXUALJgHaSQM88UzwHr8tx4gttOfWZLqJ0kZ4CsYAwMhsqAevFb3jTS5ppmnhO9QoAFeV6issLMJEZce1cTYX5jYfMR9K9J8K+JijpDI7mM/7VbPxRuVuPCFrNAjiNLuNm3HnGGrzzRvEGpWXmDTLuOJWYeZHKpww9j2q/deI9Qn064ju5I90iuP3eec9BzVX4c6gmneKIpJYSTsccDrlf8a63xN4rldyIiyLj1rgL/X7iTO6QmuYtycjmup0Nm80DJxkV23iA7/CyI3K8cV56qhB8oxSyszRnJJrU8HALq29eGCnBqz4nZjMWLEkjJ5ri7gkk1//Z',
    },
  },
  {
    name: 'Supercollager',
    year: 2020,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/m9f2s54w7vszb6t/supercollager.md',
    },
    image: {
      name: 'supercollager-krakow.jpg',
      width: 2587,
      height: 2231,
      url: 'https://dl.dropbox.com/s/6zyqp80obmosehg/supercollager-krakow.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAA3AEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLDoAvb0fZbJ7axXJE8qH97/u56ir2t+Br5rNLrTdKudqLkrHA7GTJGCOK482FxbalHZ3tvNbyl1DRyoUYA+xr6Lk+BHhHy98EuoSD2uVOf/Ha42/tz8Pv7a03w7q11b3N00aC2UK7yR4PUlcg/MeVxXrumo5sYcrIp8tSfNJLE496knUGKRc/NtPH4V89H4OeKz82yywef+Pgf4V1WrXE80n2q7uJZ5CMM8hyf/rVn+CviTrHhnVZLeeCW60ZpcNG3WHJ6oT9enT6VofEHXLbSfiRqkslm08jxwheAACoPOT7EV2fgH4l2muRjTriCOxlhjyiD5vMHfHuPTFafjK1trzRpdT0xbJ5kIJuSgbbjHOfbiuU8afEW/wDDuqwwafb2l5ZywrIlwXJ3H+Lkcdf51k6t8U5or6zSK0jaCWKN5riOTIBYfMBkdFOR+FdHN4+0USrEuq2RXONwmXGMVyYe1lVoru4CDkjjJJ7CtSLRvD+t6bOlvfXU17Z2xl8gnain2BHrXNXF7D4v8bm38USNpsqJ5KPHDu5HQEE9Pf3rqrb4Q6RPM6x+JXimU/6toVDeufvVyt9441Hw5b6no0cZv7AyOnnscAlv4hjPJwT15zXK/wBr2kfgyS2hO2/uZv3obkqgOeM9AeKxbadpDLHjEYhfC+nBrOr2qO0s4Z3im8uWBVIUhfy+ldRpdz4fhtlg02GOG4ljEchVDl/Xn61JeaJYXzC4nsYZrmMZjdl+YEcjnr1qnpsXiDUvDusa3rs5fZmJY923yn3KM4+noe9cnrESNbajGygxhoeO33a82169ivtRMkNsLdAAojAxgDisxXKk4OMjFNNei+HPEjeIdfttMe2WH7Q21WDZAwCeR9BXqcPhqC2niljmYOnJyOKtT3MbgWlq6yXkzeTHEDzuPqPQdTXA6/fJZ293YPLNFLaTmJwMbWIPU4P481SvhMRdOxXbciMRp1dyo647dfxpb3wVpt3oCSksmoO3+tMgAjGP4h6Hp6151qehajpCh7y1kjjZyiyFflY+xrMr2bRvh3b+FNVj1241Z5EsN8rxG3wWUKe+49jWhF8WfDk1/LHO93DaJgpKkeWlPfIxwKz/AA98Q/Dela/fa20haeRisEU8b/IhHLZUH5u35+tcnqmrv4hu9a1GO3k8q6unuMjJEYzwCa+iPCkVtf8AgvRZ5beGRnsoslkBJwuK4P4yXTaFHolxYRxREyyK4WMYYYHBp13qen+K/hpqN79nicw2kvyugPlyKh5HofevnevozxTrENtaTWrDzZp7aZVwuAAEOc5+tfOdFek+Bx5nw98WxHoIoJPykI/rXt3wwn+0fDjR2P8ABG0f5OwrjvjoyLZ6OHZQN0zYIPOAvT35rgvC/ifTdO8E6/pl1KySXUMghOxiGYpgDgcfU8V5tX//2Q==',
    },
  },
  {
    name: 'A Tree Grew Through My Window',
    year: 2019,
    description: {
      local: null,
      url:
        'https://dl.dropbox.com/s/6bede848uuv68v4/a-tree-grew-through-my-window.md',
    },
    image: {
      name: 'a-tree-grew-through-my-window-1.jpg',
      width: 1500,
      height: 1000,
      url:
        'https://dl.dropbox.com/s/kaejjyr57i2g1zn/a-tree-grew-through-my-window-1.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAArAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/API0XGKuQjkV0mlJkrXoGl2+Yhx2qLVrX5DxXCalFjdxXOzjBNUZFzmnrVuD7wrqdGGXWvS9GjBiGfSnazbgQE9q821hQGauUufvGqD05atQfeFdboUbSyIiKWY9ABk123ifxBf6Po0syWssE0SCOBiu5S2PTuOP1rF0LXrrXbu/nvHCLLDGYIs4AI+9gfmax9bXBauQuepqg9CtVuBvmFdl4bkCXEbk4A/wqz4seVtIcDzdu9T3xisXwtfRxavbw5JaQleB/smtXXsZauLuj8xqg5pitVuBvmFdfoLcrXUa25/4RfUBn/l3b+VeY6BNs8QWDZ/5bAfnxXYa6fvVxV0fmNUHNRITgVcg6iuy0AdK6TWv+Rav/wDr3b+VeV6USNYsiD/y3T+Yrudc6NXF3X3zWdKeK//Z',
    },
  },
  {
    name: 'Object Permanence',
    year: 2018,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/9w1km0sylms5pqf/object-permanence.md',
    },
    image: {
      name: 'object-permanence-7.jpg',
      width: 7360,
      height: 4912,
      url: 'https://dl.dropbox.com/s/9z380lfu88spoqo/object-permanence-7.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAArAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/AOG8OWi/YUkZc/6Sy4H/AFzrZXR4JJgH2QscsN74B+uagGhT3N3aRQurzSSthAwOFCnnPTv09qsXmgXunid7qzneGMnEqRFlIHfp0rLuNP8AOumK2UrKsOT+4PHP0rQ0/wAO6bcWlsyRQSTzDLoVG4HPTBrO1nQriy8HpcLCRC/O4dF+c157MPnZcdK9O8MEJp0IMbSF70oApwcmI9PyrtdP+z6sH+xWSqtuxhInmbcCCc+vfNXD4euPNt5TbW/yzZIEp7grjke9NTQtWuHcJpgRdxxukTBFat14fuvts97NCrq8PlrF5gyvOdx7VmWVjPp89uj6eoaM5LLKpB4Nch4jklk+HduS7FG2bVPbcxNeVXSYBx1rtoJHg8LrLE4SRNQUqx7HyzXrWjaVHpdpbNG4c3EKSOwXG5iNxP8A49j8K6vyyEhVEViZF4NXrkmGymlGA6ISPrWPqBuLdGY3TSFg/wAhUBQNp9Oa5/xHcvZae0yKGlx8uRkdM8/lXC+IwY/hnpmFzlYSQOp+QmvK7qeJtv8AtDPXp7V0uhavGt/FZ3GGt2cFg3K5I25x+Ne4KzwyW8Tn93HDGqj0AyP6VtSanBvgA3bTKMkcVHqXiS1SwvkEbEoAhycHkDkevWqWva3bKiRq6jCybmI4+4e9c94ivrOWyRbqeNI/LdwWcDcQhxisLXSbfwz4fiYYA8vPviI14xeTO0ryHHJIHHbNadqkcjpOP4m28ema9P0nUfscEF5c3dxMJ4tmxpGcgqT0B4AwamvPErTSR+WhjCOCu85P1471jX32e/vWZraKSeYjc2M4JPXBNT61qi3zJBA4McQxJjBB69D+VULy7863gjacyB5WDGTojgED69f1pmr6lIbO3hkc4idmVc5CnGOK89u7TH3Ztw9xitGFQkKhRgbzXYWkjnToFLHC5wPTpSuSSmfWs64ZtwOTnd/WpLYYhYDuDmqOrOxjA3EBVBGOMZODUd8x8hOf4a56cnHWv//Z',
    },
  },
  {
    name: 'Gail, for the Bureau of Meteoranxiety',
    year: 2018,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/x3zlk2a7jqseqoj/gail-the-bomachat.md',
    },
    image: {
      name: 'gail-the-bomachat-3.jpg',
      width: 2036,
      height: 1308,
      url: 'https://dl.dropbox.com/s/7bk8zjujh9oixaz/gail-the-bomachat-3.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAApAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/ANzxP8W2NvD/AGAkkIcZaW4iG4+yqe3vUvhv4q6hLEG1ixWSBj5aXMI24k7Bh6H1HStzw54h12fxALW7jEtnMzHf12nrwfT2ruy27Kg8ng+1Ry/fqnGiR3pUuPmcEKOTVi+dkRmU4YRsQaz9BuJbmzkkmcu/mHk15f4s0OyPi23msDa3NhFZpbyQCZWZAuV4Gc8ACpW06zuLNbGCRLeHbxGDgtgg8eprsPA+kixjkdJZWQDHzNkHPb+VdefllUj+LOfypjSJI3ysDkcVWELfb1l+XaCufmFT34zE/wD1zb+VZnhsYsJf+uh/lXzZc6hIbr7SuElLbwyDBBq5HrF1fp9puLhoikvzsGywbBIIH4V6HpWkzXMljcxeLbvSJZbJcW8K7t+37zHJ2n7w7Zr1C0gmhtYw1w9yeSZX75FFuUW4YuwVEVUBJxnPNYOhXiarrl3Kmf3ROcjpk4H6A11c8ZkQgd1IqjpVjJYW8kcjKxZ9wKn2r5U3Bo1UkcCrWl/2cl/G+pSSx2w5LIu7JHIBHoeRXqnhLxjpJnOn2sMjKG2W8023OPTHUf8A1q9N0jUrW8jWNZozNgkqgIHH1q3dW0s0EqRyqhZCoJTOCRwawPDOlXmk2119sjBnabrHg5QDg/qa6H7VGoxJvT3ZCBTiwPIII9q+NxdptCyZVvatbQ9NvddvfsmlWcl1MF3siAHC9MnPGORXsHhT4d6tp0yTXNnpsCsu2UOA7EevAPP416HZaQlnKJpJDJMBgEDAA+laQHmKM5GPQ4qnJaXDS7/P4HRemP8AGpVSZerc+1LjbnIAJ64718Xy/wCsH0r1z9nz/kO63/17R/8AoRr36iikpDUMvUV//9k=',
    },
  },
  {
    name: 'Rrosetta',
    year: 2017,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/1rikewwdaq141dn/rrosetta.md',
    },
    image: {
      name: 'rrosetta-3.jpg',
      width: 1080,
      height: 721,
      url: 'https://dl.dropbox.com/s/mtakf7ww8dc4qnw/rrosetta-3.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAArAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/ANCSwlNrOi9BGeCeQACf0B3H1BA7Vb8KWz/2MNpYDfzg9c9vqcfofWrPim18zSBhi+ZAc9uQTn8eo9BxWjpcaWehiSSRYkXLM7nC+vP04J9RxXNXt6+t6Da3LqjE53eU+7YfQjqD7+mK6PTrUvpkawMj/LyAeh6cj8cfUg1yviOzlW7t1k4LMAM88Zx/9Y+4NcRBp8bWEFwYo0ebWXQyuvBAPT6Dv9RXpCQXUcUiqhKspGNnbk+v/Av0q74btmbT1UZxgDAHr2/HHXtj3q9qlq0lsu5t67s52YHOf59R6YxWnHpKX+jeRMsT278OkiZHHOTz26+/Ssu58O2+lAxW9tDCjnJEaYyR6+4z+oqzLZySQqAoJP3SF59Oo6Z6fXmuLvIbwajN585l2XChBInQYXjPt+P615ve6xJp2jWkEO37QLyW5G4ZC4bAOPrn8q9KTWC77VvkKt/00Az3/nz+lb2kXkEVqkaXcCluDmUd+xx6/pXAeLviRr2meIb3S4ntZbeJ8KzRMGPfOQQal8HfE7XL7xFZ6fKtqsM7iNnCuxUHuAWIz+FeuXNvM3zMWZQvAxwBVe6uGjhblwo9O+eOvuOP1rlZp/tEtzM8u5xKCGYAdhzj8P0ry5NLsby206SWEGSeeRZG3csoPHfirFuiM/3Fwf8AZ/z61vabLa2UqXE1k1wsa7tkYXOR9etcf4intta8RXF5/Z+qxvcHeIzAN2AACcZqz4ctjpmrWmpQ6LrswglDfJak556fWur1DxPpcl6LoeFtZjndvNLPAeTnqBmtO2+ItpqMAtI9F1NlcmJmeIBAe4JJ4rIlaOQTuYQnzP8AIwBI4/nXGyXa2WiafN9nSVt7kqWxu5PWtCzM+6MfZ5iSuRhDyOK2bcXiKP8AQ5zx/wA8zWaqte+LJPOtWlEMCxeW0ZJDHLdPpXd6DDZpCbeXRLYnDOWkDI3UACszWra1/tFAmjoqBefKVmGMk+nbNYWgzmA6laRW8rItz5qhUY4V1BHb2oubiRVuN0My5MmMo3p9K5VbeC+07TYZFKk78sqnJ5/X9aLfUryS4R2nYkLgcDgegFdDb61qIUAXT4+grNs765Or3UhmYu9zlj6kJgV2em6neu5DXDELHx04qne6tfTJ5UlwzIScjArC0m9uYdWuGjmZC9tDu28ZwCKj1O7nmjd5JWZld8Hvz1rCtJ5I7exZSAUVscA1/9k=',
    },
  },
  {
    name: 'On The Side of Every Mountain Is Another, Smaller Mountain',
    year: 2016,
    description: {
      local: null,
      url:
        'https://dl.dropbox.com/s/tk09276h4aiow4g/on-the-side-of-every-mountain-is-another-smaller-mountain.md',
    },
    image: {
      name: 'on-the-side-of-every-mountain-is-another-smaller-mountain-6.jpg',
      width: 1340,
      height: 1734,
      url:
        'https://dl.dropbox.com/s/a3bp5fa6c5b36pr/on-the-side-of-every-mountain-is-another-smaller-mountain-6.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCABAADEBAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/AOmS8eKMSLKGB/hIqymprIw3KOeoxmpDco+Vxgj8qlaBZYhJG2GHUUyNVbnftPoaejPGcbzgehyDVn7SfU/lXJs8crZVDGfTORT0JBFXrbaW/eFgp64q0GXGELj6mkKMTnJqzBp08oDchfU1a/s6T+6351yUdvMy7xGStXYbSY4IQEnoMjP5Vfjgig/4+mKsRwq9vxq19kjkXNuzFsZw3ce1SQ2pVstgn0Iq+jlE+6BjpinfaWrFhdJRy+0+1Zusa/oOg2st3cyJKyuqssTBnyeOmf8AOK5e28VweKdSnt7AMiwjcrSuF8xe5wT2rTk8X6T4VuI4tS1LzpRtzBbjeyAjqT0x+Oa6y18TW9/bx3NrJHLA3IdOQanGqrIx3IoQ9DipPtMP/PVa818XasdJ8PXUqyOksv7qJkPIY/5NeLvMXHzdc/ePU01ZSoPzHkYyOOKjLBud351seG/E9/4Z1AXFsVlhbAlgkyUcf0PvXT+Ivi7qmpTRrpUCafbx84IDsx9zjAHsKs/8Lhm/58E/75FZfjnxbp+u2sVlYCVvKm8xpGGFOARx61w5bjNN3c5NJuOeKQkZIzSZJ603HsaVXIp2eOKaTikJpKKMn1pKUfWnEU2ikpcV/9k=',
    },
  },
  {
    name: 'Texture Cache',
    year: 2016,
    description: {
      local: null,
      url: 'https://dl.dropbox.com/s/tj8hg2p3azuln42/texture-cache.md',
    },
    image: {
      name: 'texture-cache-2.jpg',
      width: 1340,
      height: 1072,
      url: 'https://dl.dropbox.com/s/0435zo31o9inj4w/texture-cache-2.jpg',
      thumbnail:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAAzAEABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APNVt18QwraKVR1y0blvlBx/WuYngmtJ5LedCksZ2sp7Gowc0tFSxQSzZ8tCQOp7D8atWtpbyPiac8dl6fma0LOfS7GVndpd4+6I1yR+JrFt7qe0k8yCVo29VNaV7qZ15rdbpIYrtQIxc/dV17Bx/Ws++0680ucRXlu8TEbl3dGHqD0I+lQdqkjQMD3bsvrVoTNDb+UYVAB5J7mqxclic8eg4qbyYxD5kl1GGPRBljVSiuisNZW80o6RqA8xFB+zyH7yewrFurOSymEchBRhuRx0Yf5/KktbqSxu47iLBZDnBGQfaujuZbG9sUvLiUi1BJ8mIANvP8NcxK6ySMyRiNSeFBzgfWmUxXB60/rR7960IrlZ7WSC5IZR8wb+JT/eHr7juKqSRlSQCGAOARWjodnBfJfQSg7xEHjIP3SD1/UVnXFtLauUkUj0PrUVQYpQ5FSBwamhQOcnoOo9aeF8ond/q343elWdMvV0vVobrDNEpxKvqh4Yf4Vq+JrFLW7WSOQyQTqGXJ49fyOc8VFpelaBqurw2UmutpqSLjz7q33R7/TIbge5rm+tSxWrToTGwLr1Q8H8KbFZ3NxcJBBbyyzO21I40LMx9AB1r2/wN8Lo4PDlz/wkltturtlZYzy0KgHAyOjHOSPYVS1n4QNA+bG8ZoH7ld3/AOo15truj3GgajJp18m2RVDIw7qeh/H0qOO8a70Z7GY5aAb4SfTuv4Vis240ZOaekjxuGRiGHQinrdTrMJkmkWUHIdWIIPsRXceD/iB4rXU47VtauJYTxtmCy/qwJr0N/F2uCZ8XoHTjyY//AImvFvEuq32reJb26v7hppvMKbiAMKvAAA4ArLViXHNREc1//9k=',
    },
  },
];

export default projects;
