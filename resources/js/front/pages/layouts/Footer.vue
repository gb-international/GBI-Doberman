<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="">
    <footer id="footer">
      <div class="footer-content">
        <div class="container">
          <div class="row text-white pt-5">
            <div class="col-sm-3">
              <p class="text-white m-0 p-0 pb-1">Link</p>
              <router-link class="text-white d-block pb-1" to="/"
                ><span class="white-important">Home</span></router-link
              >
              <router-link
                class="text-white d-block pb-1"
                to="/explore-destination"
                ><span class="white-important"
                  >Explore Destination</span
                ></router-link
              >
              <router-link
                class="text-white d-block pb-1"
                to="/resources/travel-education"
                ><span class="white-important"
                  >Travel & Education</span
                ></router-link
              >
              <router-link class="text-white d-block pb-1" to="/resources/faq"
                ><span class="white-important">FAQ</span></router-link
              >
              <router-link class="text-white d-block pb-1" to="/blog"
                ><span class="white-important"
                  >GBI Travel Blog</span
                ></router-link
              >
              <router-link
                class="text-white d-block pb-1"
                to="/image-gallery/domestic"
                ><span class="white-important">Gallery</span></router-link
              >
            </div>
            <div class="col-sm-2">
              <p class="text-white m-0 p-0 pb-1">More About GBI</p>
              <router-link
                class="text-white d-block pb-1"
                to="/about-us/our-story"
                ><span class="white-important">Our Story</span></router-link
              >
              <router-link
                class="text-white d-block pb-1"
                to="/resources/safety-security"
                ><span class="white-important">Safety & Security</span></router-link
              >
              <router-link
                class="text-white d-block pb-1"
                to="/about-us/how-we-work"
                ><span class="white-important">How We Work</span></router-link
              >
              <router-link
                class="text-white d-block pb-1"
                to="/about-us/join-our-team"
                ><span class="white-important">Join Our Team</span></router-link
              >
              <router-link class="text-white d-block pb-1" to="/contact-us"
                ><span class="white-important">Contact Us</span></router-link
              >
            </div>
            <div class="col-sm-3 footer-icons-section">
              <p class="text-white m-0 p-0 pb-2">Accreditaion & Recognitions</p>
              <div class="icons">
                <div class="three-icons">
                  <img src="/images/icons/lato.png" />
                  <img src="/images/icons/box.png" />
                  <img src="/images/icons/elephant.png" />
                </div>
                <hr class="mt-2 mb-2" />
                <div class="social">
                  <a href="https://www.facebook.com/gowithgbi/" target="blank">
                    <img src="/images/icons/fb.png" />
                  </a>
                  <a href="https://www.instagram.com/gowithgbi/" target="blan"
                    ><img src="/images/icons/insta.png"
                  /></a>
                  <a href="https://twitter.com/gowithgbi" target="blan"
                    ><img src="/images/icons/twitt.png"
                  /></a>
                  <a
                    href="https://www.youtube.com/channel/UCYaTBxhqqXaMOUNZiAqvI_A"
                    target="blan"
                    ><img src="/images/icons/youtube.png"
                  /></a>
                  <a
                    href="https://www.linkedin.com/company/gowithgbi"
                    target="blan"
                    ><img src="/images/icons/linked-in.png"
                  /></a>
                  <a href="https://api.whatsapp.com/send?phone=919717922240"
                    ><img src="/images/icons/whatsapp.png"
                  /></a>
                </div>
                <hr class="mt-2 mb-2" />
                <div class="ssl-icon">
                  <img src="/images/icons/ssl_certificate.png" class="w-45" />
                  <img src="/images/icons/indiaicon.png" class="w-20" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <p class="text-white m-0 p-0 pb-4 text-center">
                Get Latest Update
              </p>
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom pl-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 p-0">
              <span class="text-uppercase"
                >©{{ new Date().getFullYear() }} GBI Holidays </span
              >Pvt. Ltd. All right reserved.
            </div>
            <div class="col-sm-6 text-right pr-5">
              <a
                class="text-white"
                target="_blank"
                href="https://s3.amazonaws.com/www.pands.gowithgbi.com/GBI+Privacy+and+Security+Policy.pdf"
                >Privacy & Policy</a
              >
              |
              <a
                class="text-white"
                target="_blank"
                href="https://s3.amazonaws.com/www.tandc.gowithgbi.com/GBI+Terms+and+Conditions.pdf"
                >Terms & Condition</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Mobile footer -->
    <div class="m-bottom">
      <div class="pb-3 mobile-subscription">
        <div class="container">
          <p class="text-white p-0 pt-4 text-center font-20">
            Get Latest Update
          </p>
          <Subscribe />
          <div class="m-social-icon mb-3 mt-2">
            <a href="https://www.facebook.com/gowithgbi/" target="blank">
              <img src="/images/icons/fb.png" />
            </a>
            <a href="https://www.instagram.com/gbirikhi/" target="blan"
              ><img src="/images/icons/insta.png"
            /></a>
            <a href="https://twitter.com/gowithgbi" target="blan"
              ><img src="/images/icons/twitt.png"
            /></a>
            <a
              href="https://www.youtube.com/channel/UCYaTBxhqqXaMOUNZiAqvI_A"
              target="blan"
              ><img src="/images/icons/youtube.png"
            /></a>
            <a
              href="https://www.linkedin.com/company/gowithgbi/about/"
              target="blan"
              ><img src="/images/icons/linked-in.png"
            /></a>
            <a href="tel:+9717922240"
              ><img src="/images/icons/whatsapp.png"
            /></a>
          </div>
        </div>
      </div>
      <div class="navbar-bottom">
        <div class="row text-center text-uppercase">
          <div
            class="col"
            @click="makeActive(0)"
            :class="{ mobile_nav_active: active_element == 0 }"
          >
            <router-link :to="`/`">
              <div class="nav-font">
                <img v-show="active_element == 0" src="/images/icons/white-home.png" class="w-20" />
                <img v-show="active_element != 0" src="/images/icons/home.png" class="w-20" />
              </div>
              <div class="nav-font">home</div>
            </router-link>
          </div>

          <div
            class="col"
            @click="makeActive(1)"
            :class="{ mobile_nav_active: active_element == 1 }"
          >
            <router-link :to="`/explore-destination`">
              <div class="nav-font">
                <img v-show="active_element == 1" src="/images/icons/white-explore.png" class="w-20" />
                <img v-show="active_element != 1" src="/images/icons/explore.png" class="w-20" />
              </div>
              <div class="nav-font">explore</div>
            </router-link>
          </div>

          <div
            class="col"
            @click="makeActive(3)"
            :class="{ mobile_nav_active: active_element == 3 }"
          >
            <router-link :to="`/contact-us`">
              <div class="nav-font">
                <img v-show="active_element == 3" src="/images/icons/white-phone-call.png" class="w-20" />
                <img v-show="active_element != 3" src="/images/icons/phone-call.png" class="w-20" />
              </div>
              <div class="nav-font">call</div>
            </router-link>
          </div>

          <div
            class="col"
            @click="makeActive(2)"
            :class="{ mobile_nav_active: active_element == 2 }"
          >
            <!-- if loogedin -->

            <a
              v-if="login == false"
              href="#"
              @click="loginCheck()"
              data-toggle="modal"
              data-target="#LoginForm"
            >
              <div class="nav-font">
                <img v-show="active_element == 2" src="/images/icons/white-user.png" class="w-20" />
                <img v-show="active_element != 2" src="/images/icons/user.png" class="w-20" />
              </div>
              <div class="nav-font text-jquery">profile</div>
            </a>
            <!-- if not looged in -->
            <router-link :to="`/dashboard`" v-else>
              <div class="nav-font">
                <img v-show="active_element == 2" src="/images/icons/white-user.png" class="w-20" />
                <img v-show="active_element != 2" src="/images/icons/user.png" class="w-20" />
              </div>
              <div class="nav-font">Profile</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subscribe from "@/front/components/form/Subscribe.vue";
export default {
  name: "Footer",
  components: {
    Subscribe,
  },
  data() {
    return {
      active_element: 0,
      login: false,
    };
  },
  created() {
    this.$bus.$on("logged", () => {
      this.isLogged = this.loginCheck();
    });
  },
  methods: {
    makeActive: function (el) {
      this.active_element = el;
    },
    loginCheck() {
      if (
        this.$cookies.get("access_token") == null ||
        this.$cookies.get("access_token") == ""
      ) {
        this.login = false;
      } else {
        this.login = true;
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>
