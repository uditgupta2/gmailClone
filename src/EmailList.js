import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import { Checkbox, IconButton } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  // const emailsData = getDocs(collection(db, "emails"));

  const getAllEmails = () => {
    return getDocs(collection(db, "emails"));
  };

  const getEmail = async () => {
    const data = await getAllEmails();
    setEmails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data);
  };

  useEffect(() => {
    console.log("in use efffect");
    getEmail();
  }, []);

  console.log("jhgiuuh");
  console.log(emails);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="Green" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="Blue" />
      </div>
      <div className="emailList__list">
        {emails.map((doc, ind) => (
          <EmailRow
            key={doc.id}
            title={doc.to}
            description={doc.message}
            time="1PM"
            subject={doc.subject}
          />
        ))}
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
        <EmailRow
          title="Test"
          description="test D"
          subject="test S"
          time="11 pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
