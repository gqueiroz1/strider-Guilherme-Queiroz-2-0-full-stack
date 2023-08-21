import { beforeAll, describe, expect, test } from "vitest";
import PosterrCard from '../components/PosterrCard.vue'
import { render, screen } from "@testing-library/vue";

describe('testing post card', () => {
  beforeAll(async () => {
    await render(PosterrCard, {
      props: {
        post: { 
          id: 1,
          text: 'Lorem ipsum',
          image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
          creator: 'gqueiroz1',
          repostedFrom: 'jkm777',
          reposts: 0,
          createdAt: '08/16/2023'
        }
      }
    })
  })

  test('should render creator name', async () => {
    // checks if creator is rendered on the card
    const text = await screen.findByText('gqueiroz1')
    expect(text.innerHTML).toBe('gqueiroz1')
  })

  test('should render creation date', async () => {
    const date = await screen.findByText('08/16/2023')
    expect(date.innerHTML).toBe('08/16/2023')
  })

  /**
  * For this case in specific i'll have to create 
  * my post manually inside the test
  * The repostedFrom is what defines whether we have
  * the Repost button or not
  */
  test('should render Repost button', async () => {
    await render(PosterrCard, {
      props: {
        post: {
          repostedFrom: null
        }
      }
    })

    // only finds it if repostedFrom == null
    await screen.findByText('Repost')
  })

  test('should render resposted message', async () => {
    await render(PosterrCard, {
      props: {
        post: {
          repostedFrom: 'jkm123'
        }
      }
    })

    // only finds it if repostedFrom != null
    await screen.findByText('Reposted from jkm123')
  })

  test('should render post image', async () => {
    // only renders image if post.image exists
    await screen.getByTestId('postCardImage')
  })

  test('should render post text', async () => {
    // only renders image if post.text exists
    await screen.getByText('Lorem ipsum')
  })
})