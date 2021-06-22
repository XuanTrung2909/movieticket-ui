import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export default function News(props) {
  return (
    <Container maxWidth="lg">
      <Tabs className="tabs">
        <TabList className="tabslist">
          <Tab className="tab" selectedClassName="active">
            Tin tức
          </Tab>
          <Tab className="tab" selectedClassName="active">
            Review
          </Tab>
          <Tab className="tab" selectedClassName="active">
            Khuyến Mãi
          </Tab>
        </TabList>
        <TabPanel className="tabpanel">
          <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_13/79332148_1279114445594121_7816999534243872768_n.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                  <h2>Thang Duy đóng phim mới của đạo diễn ‘Cô hầu gái’</h2>
                </a>
                <p>
                  “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park
                  Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và
                  Park Hae Il đóng chính.
                </p>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_14/spidey3_image05.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html">
                  <h2>10 bộ ba phim thất bại ở phần cuối</h2>
                </a>
                <p>
                  “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park
                  Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và
                  Park Hae Il đóng chính.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={4} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_20/sinister_baguul.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html">
                  <h3>Bộ phim kinh dị đáng sợ nhất mọi thời đại</h3>
                </a>
                <p>
                  Nghiên cứu khoa học chỉ ra bộ phim kinh dị siêu nhiên
                  “Sinister” (2012) của đạo diễn Scott Derrickson là tác phẩm
                  đáng sợ nhất mọi thời đại.
                </p>
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_21/perfect3.jpeg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html">
                  <h3>Vì sao điện ảnh cần những bộ phim làm lại?</h3>
                </a>
                <p>
                  Bên cạnh chuyển thể, làm lại các tác phẩm cũ là lựa chọn ưa
                  thích của Hollywood nói riêng và điện ảnh, truyền hình nói
                  chung trong sứ mệnh sản xuất nội
                </p>
              </div>
            </Grid>
            <Grid item sm={4} className="item_small" xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/bzwvopcg/2020_10_20/bvu8jj2gt1941.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                      <h3>Tài tử Jeff Bridges bị ung thư hạch</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_11/m6.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                      <h3>10 mẹo diễn xuất của các ngôi sao điện ảnh</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/neg_yslewlx/2020_10_21/34659802_8863303_image_a_41_1603281202936_2__1.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                      <h3>Lily James bị chê diễn xuất vô hồn trong phim mới</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_20/thomas_1.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                      <h3>Dylan O’Brien bị ám ảnh vì tai nạn trường quay</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel className="tabpanel">
          <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_13/79332148_1279114445594121_7816999534243872768_n.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                  <h2>Thang Duy đóng phim mới của đạo diễn ‘Cô hầu gái’</h2>
                </a>
                <p>
                  “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park
                  Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và
                  Park Hae Il đóng chính.
                </p>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_14/spidey3_image05.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html">
                  <h2>10 bộ ba phim thất bại ở phần cuối</h2>
                </a>
                <p>
                  “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park
                  Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và
                  Park Hae Il đóng chính.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={4} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_20/sinister_baguul.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html">
                  <h3>Bộ phim kinh dị đáng sợ nhất mọi thời đại</h3>
                </a>
                <p>
                  Nghiên cứu khoa học chỉ ra bộ phim kinh dị siêu nhiên
                  “Sinister” (2012) của đạo diễn Scott Derrickson là tác phẩm
                  đáng sợ nhất mọi thời đại.
                </p>
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_21/perfect3.jpeg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html">
                  <h3>Vì sao điện ảnh cần những bộ phim làm lại?</h3>
                </a>
                <p>
                  Bên cạnh chuyển thể, làm lại các tác phẩm cũ là lựa chọn ưa
                  thích của Hollywood nói riêng và điện ảnh, truyền hình nói
                  chung trong sứ mệnh sản xuất nội
                </p>
              </div>
            </Grid>
            <Grid item sm={4} className="item_small" xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/bzwvopcg/2020_10_20/bvu8jj2gt1941.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                      <h3>Tài tử Jeff Bridges bị ung thư hạch</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_11/m6.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                      <h3>10 mẹo diễn xuất của các ngôi sao điện ảnh</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/neg_yslewlx/2020_10_21/34659802_8863303_image_a_41_1603281202936_2__1.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                      <h3>Lily James bị chê diễn xuất vô hồn trong phim mới</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_20/thomas_1.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                      <h3>Dylan O’Brien bị ám ảnh vì tai nạn trường quay</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel className="tabpanel">
          <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_13/79332148_1279114445594121_7816999534243872768_n.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/thang-duy-dong-phim-moi-cua-dao-dien-co-hau-gai-post1141317.html">
                  <h2>Thang Duy đóng phim mới của đạo diễn ‘Cô hầu gái’</h2>
                </a>
                <p>
                  “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park
                  Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và
                  Park Hae Il đóng chính.
                </p>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_14/spidey3_image05.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/10-bo-ba-phim-that-bai-o-phan-cuoi-post1141853.html">
                  <h2>10 bộ ba phim thất bại ở phần cuối</h2>
                </a>
                <p>
                  “Decision to Leave” - dự án điện ảnh mới của đạo diễn Park
                  Chan Wook - sẽ khởi quay trong cuối tháng 10 với Thang Duy và
                  Park Hae Il đóng chính.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={4} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_20/sinister_baguul.jpg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/bo-phim-kinh-di-dang-so-nhat-moi-thoi-dai-post1143992.html">
                  <h3>Bộ phim kinh dị đáng sợ nhất mọi thời đại</h3>
                </a>
                <p>
                  Nghiên cứu khoa học chỉ ra bộ phim kinh dị siêu nhiên
                  “Sinister” (2012) của đạo diễn Scott Derrickson là tác phẩm
                  đáng sợ nhất mọi thời đại.
                </p>
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className="img">
                <a href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html">
                  <img
                    src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_21/perfect3.jpeg"
                    alt="alt"
                  />
                </a>
              </div>
              <div className="content">
                <a href="https://zingnews.vn/vi-sao-dien-anh-can-nhung-bo-phim-lam-lai-post1144480.html">
                  <h3>Vì sao điện ảnh cần những bộ phim làm lại?</h3>
                </a>
                <p>
                  Bên cạnh chuyển thể, làm lại các tác phẩm cũ là lựa chọn ưa
                  thích của Hollywood nói riêng và điện ảnh, truyền hình nói
                  chung trong sứ mệnh sản xuất nội
                </p>
              </div>
            </Grid>
            <Grid item sm={4} className="item_small" xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/bzwvopcg/2020_10_20/bvu8jj2gt1941.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/tai-tu-jeff-bridges-bi-ung-thu-hach-post1143860.html">
                      <h3>Tài tử Jeff Bridges bị ung thư hạch</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_11/m6.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/10-meo-dien-xuat-cua-cac-ngoi-sao-dien-anh-post1140588.html">
                      <h3>10 mẹo diễn xuất của các ngôi sao điện ảnh</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/neg_yslewlx/2020_10_21/34659802_8863303_image_a_41_1603281202936_2__1.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/lily-james-bi-che-dien-xuat-vo-hon-trong-phim-moi-post1144537.html">
                      <h3>Lily James bị chê diễn xuất vô hồn trong phim mới</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <div className="img">
                    <a href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                      <img
                        src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_20/thomas_1.jpg"
                        alt="alt"
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="content">
                    <a href="https://zingnews.vn/dylan-o-brien-bi-am-anh-vi-tai-nan-truong-quay-post1143874.html">
                      <h3>Dylan O’Brien bị ám ảnh vì tai nạn trường quay</h3>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Tabs>
    </Container>
  );
}
