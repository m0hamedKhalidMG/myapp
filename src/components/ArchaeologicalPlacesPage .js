

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 40px;
  }
`;

const Sidebar = styled.div`
  background-color: #3b1112;
  padding: 20px;
  width: 300px;
  color: #f1ede1;
  border-radius: 15px;
  text-align: right;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-right: 20px;
  }
`;

const Title = styled.h2`
  color: #3b1112;
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const LocationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LocationItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.8;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #f1ede1;
  }
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Increase spacing between images */
  justify-content: center;
  margin-bottom: 20px;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  flex-grow: 1;
  color: #3b1112;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const ImageWithDescription = styled.div`
  width: calc(33% - 20px); /* Width adjusted for three items per row */
  max-width: 300px; /* Set a maximum width */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out; /* Animation for hover effect */

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover for a nice effect */
  }
`;

const ContentImage = styled.img`
  width: 100%;
  height: 200px; /* Set a uniform height for all images */
  object-fit: cover; /* Ensures the image covers the space evenly */
`;
const ArchaeologicalPlacesPage = () => {
  
  const [selectedLocation, setSelectedLocation] = useState('القصيم');

  const locationsData = {
  
    القصيم: {
      images: [
        require('../images/القصيم/1.jpg'),
        require('../images/القصيم/2.jpg'),
        require('../images/القصيم/3.jpg'),
        require('../images/القصيم/4.jpg'),
        require('../images/القصيم/5.jpg'),
        require('../images/القصيم/6.jpg'),
        require('../images/القصيم/7.jpg'),
        require('../images/القصيم/8.jpg'),
        require('../images/القصيم/9.jpg'),
        require('../images/القصيم/10.jpg'),
      ],
      descriptions: [
        'تقع منطقة شعيب الأدغم شرق منطقة القصيم، وتُعتبر واحدة من المواقع الأثرية المهمة في المملكة العربية السعودية. يُعَد هذا الموقع شاهدًا على تاريخ العصور الحجرية، حيث تم اكتشاف العديد من الأدوات الحجرية المميزة والنادرة التي تعود لتلك الفترات.',
        'عاش عنترة بن شداد في بلدة قصيباء ومحافظة عيون الجواء بمنطقة القصيم. كانت هذه المنطقة تتميز بجمالها الطبيعي، وقد وصفها في أشعاره، وخاصة في قصيدته الشهيرة "يادار عبلة بالجواء تكلمي".',
        'تمثل الكتابات والنقوش والرسوم الصخرية القديمة المنتشرة على صخور الجبال في المملكة العربية السعودية ثروة تاريخية ذات قيمة عالية. تُعتبر هذه الآثار من المصادر الرئيسية التي استقى منها المؤرخون الكثير مما دوّنوا عن تاريخ الجزيرة العربية وحضارتها.',
        'يعتبر درب زبيدة أحد أبرز طرق الحج والتجارة القديمة التي تمتد من الكوفة في العراق إلى مكة المكرمة. يُنسب هذا الطريق إلى زبيدة بنت جعفر المنصور، زوجة الخليفة العباسي هارون الرشيد، التي أسهمت في تطويره وتحسينه.',
        'يمتد الطريق التاريخي من البصرة إلى مكة، ويعود تاريخه إلى العصر العباسي. يشمل هذا الطريق محطتين رئيسيتين في منطقة القصيم، وهما محطة النبا ومحطة ضريه، اللتان تعتبران من المواقع المهمة في تاريخ التجارة والحج.',
        'في الأدب العربي القديم، تُشير كلمة "رامة" أو "رامتان" إلى مفهوم خاص. قد تكون هذه الكلمات تعبيرًا عن أماكن أو حالات معينة في قصائد الشعراء الجاهليين أو حتى في الكتب والمعاجم الأدبية.',
        'يتحدث عن كتل حجرية قد تكون نتيجة لتجمع الحجارة في الموقع، مما قد يدل على وجود أنشطة بشرية قديمة أو على استخدام هذه الحجارة في البناء.',
        'يُذكر وجود رسوم على الصخور، مما يعكس الجانب الفني والثقافي للحضارة التي أنشأت هذا الموقع.',
        '"مرقب عنيزة"، وهو موقع استراتيجي يقع شمال شرق مدينة عنيزة.',
        'موقع العوسجة يُعد واحدًا من المواقع الأثرية المهمة التي تحتوي على العديد من المعالم التاريخية.',
      ],
    },

   
    الجوف: {
      images: [
        require('../images/الجوف/1.jpg'),
        require('../images/الجوف/2.jpg'),
        require('../images/الجوف/3.jpg'),
        require('../images/الجوف/4.jpg'),
        require('../images/الجوف/5.jpg'),
        require('../images/الجوف/6.jpg'),
      ],
      descriptions: [
        'دومة الجندل هي عبارة عن بقايا مدينة أثرية تقع في منطقة الجوف شمال غرب المملكة العربية السعودية. يعود تاريخ المدينة إلى القرن العاشر قبل الميلاد، حيث ورد ذكرها في وثائق المملكة الأشورية في العام 845 ق م كعاصمة للمملكة العربية أدوماتو.',
        'قلعة زعبل هي قلعة أثرية تقع شمال مدينة سكاكا في منطقة الجوف في المملكة العربية السعودية. بُنيت القلعة من الحجر والطين على قمة جبل في الطرف الشمالي الغربي لمدينة سكاكا. يعود تاريخ القلعة الحالية إلى القرن 17 أو 18 م. أما أساساتها فقد بُنيت فوق أنقاض أثرية تعود للفترة النبطية في القرن الأول الميلادي.',
        'قلعة ذات الحاج هي أحد محطات طريق الحج الشامي خلال فترة الحكم العثماني. تقع القلعة في منطقة الجوف في المملكة العربية السعودية.',
        'محطة بئر بن هرماس هي إحدى محطات الخط الحديدي الحجازي خلال العهد العثماني. تقع المحطة في منطقة الجوف في المملكة العربية السعودية.',
        'أعمدة الرجاجيل هو موقع أثري يقع في ضاحية قارة جنوب سكاكا، منطقة الجوف، المملكة العربية السعودية. يتكون الموقع من خمسين مجموعة من الأعمدة الحجرية المنتصبة والمسماة بالرجاجيل (لأنها تبدو من بعيد كأنها مجموعة من الرجال). تعود هذه الأعمدة إلى الألفية الرابعة قبل الميلاد.',
        'بئر سيسرا هو بئر أثري يقع في الطرف الشمالي من مدينة سكاكا في منطقة الجوف، المملكة العربية السعودية. يعود تاريخ البئر إلى الفترة النبطية في القرن الأول الميلادي.',
      ],
    },
    تبوك: {
      images: [
        require('../images/تبوك/1.jpg'),
        require('../images/تبوك/2.jpg'),
        require('../images/تبوك/3.jpg'),
        require('../images/تبوك/4.jpg'),
        require('../images/تبوك/5.jpg'),
        require('../images/تبوك/6.jpg'),
        require('../images/تبوك/7.jpg'),
        require('../images/تبوك/8.jpg'),
        require('../images/تبوك/9.jpg'),
        require('../images/تبوك/10.jpg'),
      ],
      descriptions: [
        'تعتبر منطقة تبوك من المناطق الغنية بالتراث الأثري، حيث تحتوي على مجموعة من الرسوم الصخرية التي تُعَد من أبرز معالمها. من بين هذه الرسوم، توجد الرسوم الحيوانية في مواقع متفرقة من موقع "أبا العجل" الأثري، الواقع في جبال اللوز بمركز السرو التابع لمنطقة تبوك.',
        'تُعتبر قلعة تبوك واحدة من المحطات الهامة على طريق الحج الذي يربط بين الشام والمدينة المنورة. تتكون القلعة من مجموعة من القلاع والمحطات التي تبدأ من الحدود السعودية الأردنية وتمتد حتى المدينة المنورة لاستقبال الحجاج.',
        'تقع المحطة على ضفة وادي الأخضر جنوبي مدينة تبوك، وتبعد عنها حوالي 80 كيلومترًا. تم بناء المحطة في عام 1325 هـ.',
        'تُعتبر هذه المحطة إحدى محطات خط حديد الحجاز، وهي من المحطات الرئيسية للخط. وصل إليها أول قطار عام 1906م، مما يُشير إلى أهميتها في تطوير وسائل النقل في تلك الفترة.',
        'تُعتبر قلعة المعظم واحدة من القلاع المهمة التي كانت تُستخدم لمراقبة الحجاج وحمايتهم على طول خط سكة الحديد. تضم القلعة بركة المعظم، التي كانت تُعتبر من الأجزاء الأساسية في النظام المائي الذي يدعم القلعة.',
        'تقع القرية الأثرية إلى الشمال الغربي من مدينة تبوك بحوالي 80 كم، وتُعد من أهم المواقع الأثرية في المنطقة. يتضمن الموقع منشآت حجرية وأطلال مدينة تعود إلى تاريخ يعود إلى مطلع الألف الأول قبل الميلاد.',
        'يقع الموقع الأثري شمال شرق تبوك بحوالي 250 كم، ويتميز بوجود وحدات معمارية وبرك. يتضمن الموقع مجموعة من المنحوتات، بما في ذلك رسوم ونقوش وأدوات حجرية.',
        'تُعتبر المملكة العربية السعودية واحدة من أهم المناطق التاريخية الغنية بالآثار، حيث تتميز بتنوعها التاريخي وأشكالها المعمارية الفريدة. تمتد هذه الآثار عبر العصور المختلفة، مما يجعلها كنزًا ثقافيًا وتاريخيًا.',
        'تُعتبر بئر هداج واحدة من أبرز وأشهر الآبار في الجزيرة العربية، وتقع في منطقة محاطة بأشجار النخيل، مما يضفي عليها طابعًا مميزًا. تشتهر هذه البئر بتاريخها العريق وأهميتها في توفير المياه للمناطق المحيطة بها.',
        'القصر الأثري الذي يقع شمال تيماء يُعتبر من المعالم التاريخية الهامة، حيث يعود تاريخ بنائه إلى ما قبل الميلاد. يُظهر القصر عمق الحضارة التي ازدهرت في المنطقة، ويحتوي على قطع أثرية قديمة تتضمن نقوشات ومعادن غالية وكتابات بأبجديات أرمية وثمودية، مما يعكس تنوع الثقافات التي مرت على هذه الأرض.',
      ],
    },
   
  };

  return (
    <Container>
      <Sidebar>
        <Title>الأماكن الأثرية</Title>
        <LocationList>
          {Object.keys(locationsData).map((location) => (
            <LocationItem
              key={location}
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </LocationItem>
          ))}
        </LocationList>
      </Sidebar>

      <Content isVisible={selectedLocation !== null}>
        {selectedLocation && (
          <>
            <ImagesContainer>
              {locationsData[selectedLocation].images.map((image, index) => (
                <ImageWithDescription key={index}>
                  <ContentImage
                    src={image}
                    alt={`${selectedLocation} - ${index + 1}`}
                  />
                  <p>{locationsData[selectedLocation].descriptions[index]}</p>
                </ImageWithDescription>
              ))}
            </ImagesContainer>
            <p>{locationsData[selectedLocation].description}</p>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ArchaeologicalPlacesPage;
