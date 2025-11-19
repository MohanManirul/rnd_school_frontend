<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <!-- /product list -->
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-xl-12">
              <div class="conference-meet-group">
                <div class="meeting-list">
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap"
                  >
                    <div class="mb-3">
                      <h4 class="mb-1">2023 Stock Conference Meeting</h4>
                      <p>Thursday, 19 January 2023</p>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <a href="javascript:void(0);" class="btn btn-primary me-2"
                        ><i class="ti ti-plus me-2"></i>Add Participants</a
                      >
                      <span
                        class="partispant-chat btn btn-outline-light btn-icon me-2"
                        ><a
                          href="javascript:void(0);"
                          id="show-message"
                          @click="handleShowMessageClick"
                          ><i class="ti ti-message"></i></a
                      ></span>
                      <span
                        class="partispant-users btn btn-outline-light btn-icon"
                        ><a
                          href="javascript:void(0);"
                          id="add-partispant"
                          @click="addParticipantsClicked"
                          ><i class="bx bx-user"></i></a
                      ></span>
                    </div>
                  </div>

                  <!-- Horizontal View -->
                  <div class="join-contents horizontal-view fade-whiteboard">
                    <div class="join-video user-active">
                      <img
                        src="@/assets/img/join-call.jpg"
                        class="img-fluid"
                        alt="Logo"
                      />
                      <div class="video-avatar" :class="{ active: muteVideo }">
                        <div class="text-avatar">
                          <div class="text-box">S</div>
                        </div>
                      </div>
                      <div class="record-time">
                        <span>40:12</span>
                      </div>
                      <div class="audio-volume">
                        <input
                          class="custom-input"
                          type="range"
                          min="0"
                          max="100"
                          step="any"
                          value="0"
                        />
                        <span class="volume-icons"
                          ><a href="javascript:void(0);"
                            ><i class="feather feather-volume-2"></i></a
                        ></span>
                      </div>
                      <div class="more-icon">
                        <a href="javascript:void(0);" class="mic-off">
                          <i class="bx bx-microphone-off"></i>
                        </a>
                      </div>
                    </div>
                    <div class="owl-carousel video-slide owl-theme">
                      <Carousel
                        :wrap-around="true"
                        :settings="settings"
                        :breakpoints="breakpoints"
                      >
                        <Slide v-for="record in VideoCall" :key="record.id">
                          <div class="join-video single-user">
                            <img
                              :src="getImageUrl(record.Image)"
                              class="img-fluid"
                              alt="Logo"
                            />
                            <div class="part-name sub-part-name">
                              <h4>{{ record.Name }}</h4>
                            </div>
                            <div class="more-icon">
                              <a
                                href="javascript:void(0);"
                                class="other-mic-off"
                              >
                                <i class="bx bx-microphone"></i>
                              </a>
                            </div>
                          </div>
                        </Slide>
                        <template #addons>
                          <Navigation />
                        </template>
                      </Carousel>
                    </div>
                  </div>
                  <!-- /Horizontal View -->
                </div>
                <div
                  class="right-user-side right-partisipants right-side-party theiaStickySidebar mb-2"
                  id="add-party"
                  ref="messageRooms"
                  :class="{ 'open-message': isOpenMessage }"
                >
                  <simplebar id="scrollbar" class="h-100" ref="scrollbar">
                    <div class="card slime-grp">
                      <div
                        class="card-header d-flex align-items-center justify-content-between pb-0"
                      >
                        <h5 class="mb-3">Participant</h5>
                        <a
                          href="#"
                          class="close_profile close_profile4 mb-3 link-danger"
                        >
                          <i class="ti ti-x"></i>
                        </a>
                      </div>
                      <div class="card-body card-body-blk slimscroll">
                        <div class="party-msg-blk">
                          <ul class="user-list mt-2">
                            <li>
                              <div class="user-list-item">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-02.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>Maybelle</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="user-list-item">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-03.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>Benjamin</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="user-list-item">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-04.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>Kaitlin</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="user-list-item">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-05.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>Alwin</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="user-list-item">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-06.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>Freda</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="user-list-item">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-08.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>John Doe</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="user-list-item">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-09.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>John Blair</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="user-list-item mb-0">
                                <div class="avatar">
                                  <img
                                    src="@/assets/img/users/user-10.jpg"
                                    alt="image"
                                  />
                                </div>
                                <div class="users-list-body">
                                  <div class="name-list-user out-going-call">
                                    <h5>Joseph Collins</h5>
                                  </div>
                                  <div class="last-call-time">
                                    <div class="call-recent recent-part me-1">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-mic-off"
                                        ><i class="bx bx-microphone"></i
                                      ></a>
                                    </div>
                                    <div class="call-recent recent-part">
                                      <a
                                        href="javascript:void(0);"
                                        class="other-video-off"
                                        ><i class="bx bx-video"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </simplebar>
                </div>
                <div
                  class="right-user-side chat-rooms theiaStickySidebar mb-2"
                  id="chat-room"
                >
                  <simplebar id="scrollbar" class="h-100" ref="scrollbar">
                    <div class="card slime-grp">
                      <div
                        class="card-header d-flex align-items-center justify-content-between pb-0"
                      >
                        <h5 class="mb-3">Message</h5>
                        <a
                          href="#"
                          class="close_profile close_profile4 mb-3 link-danger"
                          @click="handleCloseProfileClick"
                        >
                          <i class="ti ti-x"></i>
                        </a>
                      </div>
                      <div class="card-body slimscroll p-0">
                        <div class="chat-msg-blk">
                          <div class="chats">
                            <div class="avatar avatar-lg flex-shrink-0 me-2">
                              <img
                                src="@/assets/img/users/user-01.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>Hi Everyone.!</h4>
                              </div>
                              <div
                                class="chat-profile-name d-flex justify-content-end"
                              >
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div class="chats chats-right">
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>
                                  Good Morning..! Today we have meeting about
                                  the new product.
                                </h4>
                              </div>
                              <div class="chat-profile-name text-end">
                                <h6>
                                  <i class="bx bx-check-double"></i> 10:00
                                </h6>
                              </div>
                            </div>
                            <div class="avatar avatar-lg flex-shrink-0 ms-2">
                              <img
                                src="@/assets/img/users/user-02.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                          </div>
                          <div class="chats">
                            <div class="avatar avatar-lg flex-shrink-0 me-2">
                              <img
                                src="@/assets/img/users/user-01.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>Hi.! Good Morning all.</h4>
                              </div>
                              <div
                                class="chat-profile-name d-flex justify-content-end"
                              >
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div class="chats">
                            <div class="avatar avatar-lg flex-shrink-0 me-2">
                              <img
                                src="@/assets/img/users/user-01.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>Nice..which category it belongs to?</h4>
                              </div>
                              <div
                                class="chat-profile-name d-flex justify-content-end"
                              >
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div class="chats">
                            <div class="avatar avatar-lg flex-shrink-0 me-2">
                              <img
                                src="@/assets/img/users/user-01.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>
                                  Great.! This is the second new product that
                                  comes in this week.
                                </h4>
                              </div>
                              <div
                                class="chat-profile-name d-flex justify-content-end"
                              >
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div class="chats">
                            <div class="avatar avatar-lg flex-shrink-0 me-2">
                              <img
                                src="@/assets/img/users/user-01.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>Hi.! Good Morning all.</h4>
                              </div>
                              <div
                                class="chat-profile-name d-flex justify-content-end"
                              >
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div class="chats">
                            <div class="avatar avatar-lg flex-shrink-0 me-2">
                              <img
                                src="@/assets/img/users/user-01.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>Nice..which category it belongs to?</h4>
                              </div>
                              <div
                                class="chat-profile-name d-flex justify-content-end"
                              >
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div class="chats chats-right">
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>
                                  Good Morning..! Today we have meeting about
                                  the new product.
                                </h4>
                              </div>
                              <div class="chat-profile-name text-end">
                                <h6>
                                  <i class="bx bx-check-double"></i> 10:00
                                </h6>
                              </div>
                            </div>
                            <div class="avatar avatar-lg flex-shrink-0 ms-2">
                              <img
                                src="@/assets/img/users/user-02.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                          </div>
                          <div class="chats mb-0">
                            <div class="avatar avatar-lg flex-shrink-0 me-2">
                              <img
                                src="@/assets/img/users/user-01.jpg"
                                class="rounded"
                                alt="image"
                              />
                            </div>
                            <div class="chat-content">
                              <div class="message-content">
                                <h4>
                                  Great.! This is the second new product that
                                  comes in this week.
                                </h4>
                              </div>
                              <div
                                class="chat-profile-name d-flex justify-content-end"
                              >
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="chat-footer">
                          <form>
                            <div class="smile-col comman-icon">
                              <a href="#"><i class="far fa-smile"></i></a>
                            </div>
                            <div class="attach-col comman-icon">
                              <a href="#"><i class="fas fa-paperclip"></i></a>
                            </div>
                            <div class="micro-col comman-icon">
                              <a href="#"><i class="bx bx-microphone"></i></a>
                            </div>
                            <input
                              type="text"
                              class="form-control chat_form"
                              placeholder="Enter Message....."
                            />
                            <div class="send-chat comman-icon">
                              <a href="#"><i data-feather="send"></i></a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </simplebar>
                </div>
              </div>
              <div class="meet-call-menu-blk">
                <div class="video-call-action">
                  <ul class="nav">
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="mute-bt"
                        @click="toggleMute"
                        :title="mute ? 'Unmute Audio' : 'Mute Audio'"
                        :class="muteButtonClass"
                      >
                        <i
                          :class="
                            mute ? 'bx bx-microphone-off' : 'bx bx-microphone'
                          "
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="call-end"
                        ><i data-feather="phone"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="mute-video"
                        @click="toggleMuteVideo"
                        :title="muteVideo ? 'Start Camera' : 'Stop Camera'"
                        :class="muteButtonClassVideo"
                      >
                        <i
                          :class="muteVideo ? 'bx bx-video-off' : 'bx bx-video'"
                        ></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /product list -->
    </div>
  </div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import VideoCall from "@/assets/json/video-call.json";
import "vue3-carousel/dist/carousel.css";
export default {
  data() {
    return {
      mute: false,
      micView: false,
      vidView: false,
      muteVideo: false,
      micViewVideo: false,
      vidViewVideo: false,
      VideoCall: VideoCall,
      isOpenMessage: false,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        loop: true,
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 700px and up
        767: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 991px and up
        991: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    simplebar,
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url)
        .href;
    },
    handleShowMessageClick() {
      const meetingList = this.$refs.meetingList;
      const chatRooms = this.$refs.chatRooms;

      if (meetingList && chatRooms) {
        meetingList.classList.add("add-meeting");
        chatRooms.classList.add("open-chats");
      }
    },
    handleCloseProfileClick() {
      if (this.$refs.meetingList && this.$refs.chatRooms) {
        this.$refs.meetingList.classList.remove("add-meeting");
        this.$refs.chatRooms.classList.remove("open-chats");
      }
    },
    closeProfileClicked() {
      if (this.$refs.meetingList && this.$refs.messageRooms) {
        this.$refs.meetingList.classList.remove("add-meeting");
        this.$refs.messageRooms.classList.remove("open-message");
      }
    },
    addParticipantsClicked() {
      const meetingList = this.$refs.meetingList;
      const messageRooms = this.$refs.messageRooms;

      if (meetingList && messageRooms) {
        meetingList.classList.add("add-meeting");
        messageRooms.classList.add("open-message");
      }
    },
    toggleMute() {
      this.mute = !this.mute;
      this.micView = this.mute;
      this.vidView = this.mute;
    },
    toggleMuteVideo() {
      this.muteVideo = !this.muteVideo;
      this.micViewVideo = this.muteVideo;
      this.vidViewVideo = this.muteVideo;
    },
    toggleCollapse() {
      const collapseHeader = this.$refs.collapseHeader;

      if (collapseHeader) {
        collapseHeader.classList.toggle("active");
        document.body.classList.toggle("header-collapse");
      }
    },
  },
  computed: {
    muteButtonClass() {
      return this.mute ? "stop" : "";
    },
    muteButtonClassVideo() {
      return this.muteVideo ? "stop" : "";
    },
  },
};
</script>
